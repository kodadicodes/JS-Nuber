// 'result' adlı bir değişkene 25 değerini atayarak başlayalım
let result = 25;
console.log(result); // Bu, konsola 25 yazdıracak

// Şimdi Number() fonksiyonunu kullanarak "25" dizgisini bir sayıya dönüştürelim
result = Number("25");
console.log(result); // Bu da konsola 25 yazdıracak

// Bir dizgiyi tam sayı veya kayan nokta sayısı olarak ayrıştırabiliriz
// parseInt() ve parseFloat() fonksiyonlarını kullanarak
result = parseInt("25.7"); // Bu, "25.7" dizgisini bir tam sayı olarak ayrıştıracak
console.log(result); // Bu, konsola 25 yazdıracak

result = parseFloat("25.7"); // Bu, "25.7" dizgisini bir kayan nokta sayısı olarak ayrıştıracak
console.log(result); // Bu, konsola 25.7 yazdıracak

// Bir değerin Bir Sayı Olmadığını (NaN) isNaN() fonksiyonunu kullanarak kontrol edebiliriz
result = isNaN("25"); // Bu, "25" değerinin Bir Sayı Olmadığını kontrol edecek
console.log(result); // Bu, konsola false yazdıracak

result = isNaN("asdf"); // Bu, "asdf" değerinin Bir Sayı Olmadığını kontrol edecek
console.log(result); // Bu, konsola true yazdıracak

// 'mynumber' adlı bir değişkene 10.3456789 değerini atayalım
let mynumber = 10.3456789;

// Bir sayının belirli sayıda anlamlı basamağa veya ondalık basamağa sahip bir dizeye dönüştürebiliriz
// toPrecision() ve toFixed() metodlarını kullanarak
result = mynumber.toPrecision(5); // Bu, 'mynumber' değişkenini 5 anlamlı basamağa sahip bir dizeye dönüştürecek ve noktadan sonraki sayıya +1 ekleyecek
console.log(result); // Bu, konsola 10.346 yazdıracak

result = mynumber.toFixed(4); // Bu, 'mynumber' değişkenini ondalık noktasından sonra 4 basamağa sahip bir dizeye dönüştürecek
console.log(result); // Bu, konsola 10.3457 yazdıracak

// Bir sayıyı en yakın tam sayıya yuvarlayabiliriz Math.round() fonksiyonunu kullanarak
result = Math.round(1.4); // Bu, 1.4 sayısını en yakın tam sayıya yuvarlayacak
console.log(result); // Bu, konsola 1 yazdıracak

result = Math.round(1.6); // Bu, 1.6 sayısını en yakın tam sayıya yuvarlayacak
console.log(result); // Bu, konsola 2 yazdıracak

// Math.ceil() ve Math.floor() fonksiyonlarını kullanarak yukarı veya aşağı yuvarlayabiliriz
result = Math.ceil(1.2); // Bu, 1.2 sayısını en yakın tam sayının üstüne yuvarlayacak
console.log(result); // Bu, konsola 2 yazdıracak

result = Math.floor(1.8); // Bu, 1.8 sayısını en yakın tam sayının altına yuvarlayacak
console.log(result); // Bu, konsola 1 yazdıracak

// Diğer matematiksel işlemleri de gerçekleştirebiliriz, örneğin üs alma ve karekök hesaplama gibi
result = Math.pow(5, 3); // Bu, 5'in üçüncü kuvvetini hesaplayacak
console.log(result); // Bu, konsola 125 yazdıracak

result = Math.sqrt(25); // Bu, 25'in karekökünü hesaplayacak
console.log(result); // Bu, konsola 5 yazdıracak

// Bir sayının mutlak değerini Math.abs() fonksiyonunu kullanarak bulabiliriz
result = Math.abs(-30); // Bu, -30'un mutlak değerini hesaplayacak
console.log(result); // Bu, konsola 30 yazdıracak

// Son olarak verilen bir dizi sayının en büyük veya en küçük değerini bulabiliriz 
//Math.max() ve Math.min() fonksiyonlarını kullanarak 
result = Math.max(10,20,30,40,50); // Bu bu sayılardan en büyük olanını bulacak 
console.log(result); //Bu konsola 50 yazdıracak 

result = Math.min(10,20,30,40,50); //Bu bu sayılardan en küçük olanını bulacak 
console.log(result); //Bu konsola 10 yazdıracak 

// Ve işte bu kadar! Bunlar JavaScript'te sayılarla çalışmanın bazı örnekleridir.
