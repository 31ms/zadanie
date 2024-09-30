function myFunction()
{
    let wartosc1 = document.getElementById('tekst1').value
    let wartosc2 = document.getElementById('tekst2').value
    if(wartosc1==1)
    {
        let wynik = wartosc2*4
        document.getElementById('obliczenia').innerHTML = "Koszt paliwa: "+wynik+"zł"
    }
    else if(wartosc1==2)
    {
        let wynik = wartosc2*3.5
        document.getElementById('obliczenia').innerHTML = "Koszt paliwa: "+wynik+"zł"
    }
    else
    {
        document.getElementById('obliczenia').innerHTML = "Koszt paliwa: 0zł"
    }
}