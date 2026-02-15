"""Simple static file server - no Node, so no VS Code debugger attach."""
import http.server
import socketserver
import webbrowser
import threading
import time

PORT = 3000

def open_browser():
    time.sleep(1.5)
    webbrowser.open(f"http://localhost:{PORT}")

threading.Thread(target=open_browser, daemon=True).start()

with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    print("Press Ctrl+C to stop")
    httpd.serve_forever()
