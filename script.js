function hitungNilai() {
        let tugas = Number(document.getElementById("tugas").value);
        let uts = Number(document.getElementById("uts").value);
        let uas = Number(document.getElementById("uas").value);

        let nilaiAkhir = (tugas * 30 / 100) + (uts * 30 / 100) + (uas * 40 / 100);

        let grade;
            if (nilaiAkhir >= 90) {
                grade = "A";
            } else if (nilaiAkhir >= 80) {
                grade = "B";
            } else if (nilaiAkhir >= 70) {
                grade = "C";
            } else {
                grade = "D";
            }

        let keterangan = "";
            switch (grade) {
                case "A":
                keterangan = "LULUS";
                break;
                case "B":
                keterangan = "LULUS";
                break;
                case "C":
                keterangan = "LULUS";
                break;
                case "D":
                keterangan = "REMED";
                break;
            }      

        document.getElementById("hasil").innerHTML = 
            "Nilai Akhir: " + nilaiAkhir.toFixed(2) + "<br>" +
            "Grade: " + grade + "<br>" +
            "Status: " + keterangan;
}
