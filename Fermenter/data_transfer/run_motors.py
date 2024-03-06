import subprocess

def run_flask_apps():
    subprocess.Popen(['python', 'Fermenter/data_transfer/online_data_pull.py'])
    subprocess.Popen(['node', 'Fermenter/site/server.js'])
    
if __name__ == "__main__":
    run_flask_apps()
