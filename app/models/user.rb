class User < ApplicationRecord

    has_secure_password
    has_one :budget
    has_many :friends
    has_many :people, through: :friends
    validates :email, email: {mode: :strict, require_fqdn: true}, uniqueness: true
    validates :password, presence: true, allow_blank: true
    validates :password_confirmation, presence: true, allow_blank: true
    validates :first_name, presence: true
    
end
