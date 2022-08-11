class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :password, :password_confirmation, :email

  has_many :friends
  has_many :people, through: :friends
  
  has_one :budget
end
