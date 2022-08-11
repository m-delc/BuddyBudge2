class PersonSerializer < ActiveModel::Serializer

  attributes :id, :first_name, :bio, :img
  
  has_many :friends
  has_one :person_budget
  # has_many :users, through: :friends

end
