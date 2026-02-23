"""Simple static file server - no Node, so no VS Code debugger attach."""
import http.server
import socketserver
import webbrowser
import threading
import time

PORTS_TO_TRY = [3000, 3001, 8080, 5000]

def open_browser(port):
    time.sleep(1.5)
    webbrowser.open(f"http://localhost:{port}")

httpd = None
for PORT in PORTS_TO_TRY:
    try:
        socketserver.TCPServer.allow_reuse_address = True
        httpd = socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler)
        break
    except OSError:
        continue

if httpd is None:
    print("No free port found. Try closing other servers using 3000, 3001, 8080, or 5000.")
    raise SystemExit(1)

threading.Thread(target=open_browser, args=(PORT,), daemon=True).start()
print(f"Serving at http://localhost:{PORT}")
print("Press Ctrl+C to stop")
httpd.serve_forever()
