// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

// Your task is to make 'Past' function which returns time converted to milliseconds.

//h 3600000
//m 60000
//s 1000
//0,1,1, => 61000
//2,2,2 
//3600000 * 2
//60000 * 2
//1000 * 2
//7322000


function past(h, m, s){
  return (h * 3600000 + m * 60000 + s * 1000)
}
