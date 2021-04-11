var counter = 0;
    for(i=0,j=(s.length-1);i<(s.length/2);i++,j--) {
        let temp = s[i];
        s[i]=s[j];
        s[j]=temp;
    }
    console.log(s);