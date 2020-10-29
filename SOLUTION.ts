m=1;n=1;for(i=1;i<100001;++i){t=a(i,1);if(t>n){m=i;n=t}}m;function a(i,g){return i==1?g:a(i%2?(i*3)+1:i/2,++g)}
