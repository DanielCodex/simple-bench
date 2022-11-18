from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///file.db'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), nullable=False)

    def __repr__(self) -> str:
        return f"<User username={self.username}, email={self.email}>"


@app.post("/create")
def test():
    user = request.args.get("username")
    email = request.args.get("email")
    u = User(username=user, email=email)
    db.session.add(u)
    db.session.commit()
    return "done"


@app.route("/user")
def user():
    getUser = User.query.all()
    return jsonify(getUser)
