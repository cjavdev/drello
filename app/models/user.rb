class User < ActiveRecord::Base
  attr_accessible :password, :session_token, :email
  validates :email, :presence => true, :uniqueness => true

  has_many :boards

  def password=(raw)
    self.password_digest = BCrypt::Password.create(raw)
  end

  def is_password?(raw)
    BCrypt::Password.new(self.password_digest).is_password?(raw)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
end
