var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang){
    if(penumpang.length == 0){ //untuk membuat kondisi panjang (penumpang) 
        penumpang.push(namaPenumpang);//untuk menambah (namaPenumpang)
        return penumpang; // mengembalikan (penumpang)
    }else{
        for (i = 0; i < namaPenumpang.length; i++){ //membuat perulangan,jika i/nol lebih kecil dari panjang(namaPenumpang)(true),perulangan berjalan
            if(penumpang[i] == undefined){ //karena penumpang i = 0,maka hasilnya undefined,lalu dibuat kondisi jika undefined ,yaitu (dibawah)
                penumpang[i] = namaPenumpang; //Menambah (penumpang) yg undefined ke (namaPenumpang)
                return penumpang //Mengembalikan penumpang
            }else if(namaPenumpang == penumpang[i]){ //Membuat kondisi lain jika nama penumpang sudah pernah diisi (dengan nama yg sama)                       
                console.log(namaPenumpang + " sudah ada di dalam angkot"); //Mem - print (namaPenumpang) + "sudah ada di dalam angkot" jika ada nama yg sama
                return penumpang; //Mengembalikan (penumpang)
            }
        }
    }
}