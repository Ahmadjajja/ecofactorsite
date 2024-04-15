# backend/api/product_optimize_routes.py

from flask import Blueprint, request, jsonify
from RAG.vectara_RAG import VectaraRAG
import os
from dotenv import load_dotenv

load_dotenv()
corpus_id = os.getenv("VECTARA_CORPUS_ID")

rag = VectaraRAG()
product_optimize_routes = Blueprint('product_optimize_routes', __name__)

@product_optimize_routes.route('/product_optimize', methods=['POST'])
def optimize_product():
    
    description = request.json.get('query')
    print("Description: " , description)
    summary = rag.query_vectara(corpus_id, description, 3, "en")
    print("Vectara response: ",summary)
    response = rag.ask_question_with_summary(summary, description)
    print("LLM response: ", response)
    
    # return jsonify({'Response':response}), 201
    # return {'response' : response}, 201
    return response , 201

