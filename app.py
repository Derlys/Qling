from flask import Flask, render_template

app = Flask(__name__)

@app.get("/")
def index():

    me = {"name": "Derlys Domínguez", "role": "Full Stack Developer"}
    dummy = {"name": "Jane Doe", "email": "jane.doe@example.com"}
    return render_template("index.html", me=me, dummy=dummy)

if __name__ == "__main__":
    app.run(debug=True)
