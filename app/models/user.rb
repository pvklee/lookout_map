class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  after_initialize :ensure_session_token

  has_many :reviews, foreign_key: :user_id, dependent: :destroy
  has_many :reviewed_lookouts, through: :reviews, source: :lookout
  

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.base64(16)
  end
  
end
