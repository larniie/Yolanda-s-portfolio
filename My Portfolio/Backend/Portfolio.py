from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

# Portfolio projects with GitHub links
projects = [
    {
        "title": "testing",
        "description": "Repository for testing and experimentation",
        "link": "https://github.com/larniie/testing",
        "technologies": ["JavaScript", "HTML", "CSS"]
    },
    {
        "title": "OIBSIP",
        "description": "HTML-based project showcasing web fundamentals",
        "link": "https://github.com/larniie/OIBSIP",
        "technologies": ["HTML", "CSS"]
    },
    {
        "title": "Yolanda487",
        "description": "Personal project repository",
        "link": "https://github.com/larniie/Yolanda487",
        "technologies": ["Python", "JavaScript"]
    },
    {
        "title": "Simple-API-frontend",
        "description": "Frontend application consuming REST APIs with modern design",
        "link": "https://github.com/larniie/Simple-API-frontend",
        "technologies": ["React", "JavaScript", "CSS"]
    },
    {
        "title": "Portfolio Website",
        "description": "Modern portfolio with 3D effects, AI features, and dynamic content loading",
        "link": "https://github.com/larniie",
        "technologies": ["HTML", "CSS", "JavaScript", "Python", "Flask"]
    }
]

about = {
    "name": "Yolanda S'phesihle Mthembu",
    "title": "Junior Software Developer",
    "bio": "Entry-level software developer with hands-on experience in building web applications using JavaScript, HTML, and CSS. Passionate about learning new technologies and improving coding skills.",
    "skills": ["JavaScript", "HTML", "CSS", "Python", "Flask", "Git", "GitHub", "Cloud Computing"],
    "location": "South Africa, Gauteng"
}

contact = {
    "email": "larniie69@gmail.com",
    "phone": ["+27 69 594 0293", "+27 69 484 6647"],
    "linkedin": "https://linkedin.com/in/yolanda-mthembu-156b722b4",
    "github": "https://github.com/larniie",
    "instagram": "https://www.instagram.com/larniie5"
}

@app.route("/projects", methods=["GET"])
def get_projects():
    try:
        return jsonify(projects), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/about", methods=["GET"])
def get_about():
    try:
        return jsonify(about), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/contact", methods=["GET"])
def get_contact():
    try:
        return jsonify(contact), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/portfolio", methods=["GET"])
def get_portfolio():
    try:
        return jsonify({
            "about": about,
            "projects": projects,
            "contact": contact
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({
        "status": "healthy",
        "message": "Yolanda's Portfolio Backend is running!"
    }), 200

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Endpoint not found"}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "Internal server error"}), 500

if __name__ == "__main__":
    app.run(debug=True)
