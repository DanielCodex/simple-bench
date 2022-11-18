from faker import Faker
import requests

faker = Faker()

python = "http://localhost:5000/create"
nodejs  ="http://localhost:3000/create"

for _ in range(0, 10000):
    r = requests.post(nodejs, params={
        "username": faker.name(), "email": faker.email()})


