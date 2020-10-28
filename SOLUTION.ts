m=1;n=1;for(i=1;i<=100000;++i){t=a(i,1);if(t>n){m=i;n=t}}function a(i,g){if(i==1){return g}return a(i%2!=0?(i*3)+1:i/2,g+1)}m
