class App {

    runApplication() {
        let canvas = document.getElementById("canvasID");
        let g = canvas.getContext("2d");

        // g.fillStyle = "lightblue";
        // g.fillRect(0, 0, 1000, 1000);

        g.font="40px Comic Sans MS";
        g.fillStyle = "black";
        g.textAlign = "center";
        g.fillText("Fijne Feestdagen!", canvas.width/2, canvas.height/2);

        this.weg(g, 70, 200);
        this.weg(g, 70, 420);

        this.tekenHuis(g, 170, 320);
        this.tekenKerstboom(g, 270, 300);
        this.tekenHuis(g, 310, 320);
        this.tekenKerstboom(g, 410, 300);
        this.tekenHuis(g, 460, 320);
        this.tekenKerstboom(g, 560, 300);
        this.tekenHuis(g, 610, 320);
        this.tekenKerstboom(g, 710, 300);
        this.tekenHuis(g, 760, 320);

        this.tekenKerstboom(g, 200, 520);
        this.tekenHuis(g, 250, 540);
        this.tekenKerstboom(g, 350, 520);
        this.tekenHuis(g, 400, 540);
        this.tekenKerstboom(g, 500, 520);
        this.tekenHuis(g, 550, 540);
        this.tekenKerstboom(g, 650, 520);
        this.tekenHuis(g, 700, 540);
        this.tekenKerstboom(g, 800, 520);

        this.text(g)
    }

    tekenHuis(g, x, y) {

        g.fillRect(0, 0, 10, 10);

        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(x + 30, y + 10);
        g.lineTo(x + 70, y + 20);
        g.lineTo(x + 60, y + 40);
        g.lineTo(x + 20, y + 30);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(x + 20, y + 30);
        g.lineTo(x + 20, y + 50);
        g.lineTo(x + 60, y + 60);
        g.lineTo(x + 60, y + 40);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(x + 60, y + 40);
        g.lineTo(x + 80, y + 30);
        g.lineTo(x + 80, y + 50);
        g.lineTo(x + 60, y + 60);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "darkgreen";
        g.moveTo(x + 70, y + 20);
        g.lineTo(x + 60, y + 40);
        g.lineTo(x + 80, y + 30);
        g.closePath();
        g.stroke();
        g.fill();
    }

    tekenKerstboom(g, x, y) {
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(x + 25, y + 20);
        g.lineTo(x + 35, y + 30);
        g.lineTo(x + 30, y + 30);
        g.lineTo(x + 40, y + 40);
        g.lineTo(x + 35, y + 40);
        g.lineTo(x + 45, y + 50);
        g.lineTo(x + 40, y + 50);
        g.lineTo(x + 50, y + 60);
        g.lineTo(x + 0, y + 60);
        g.lineTo(x + 10, y + 50);
        g.lineTo(x + 5, y + 50);
        g.lineTo(x + 15, y + 40);
        g.lineTo(x + 10, y + 40);
        g.lineTo(x + 20, y + 30);
        g.lineTo(x + 15, y + 30);
        g.lineTo(x + 25, y + 20);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(x + 20, y + 60);
        g.lineTo(x + 20, y + 70);
        g.lineTo(x + 30, y + 70);
        g.lineTo(x + 30, y + 60);
        g.closePath();
        g.stroke();
        g.fill();
    }

    weg(g, x, y) {
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(x + 100, y + 170);
        g.lineTo(x + 800, y + 170);
        g.lineTo(x + 800, y + 200);
        g.lineTo(x + 100, y + 200);
        g.closePath();
        g.stroke();
        g.fill();
    }

}

let app = new App();
app.runApplication();




