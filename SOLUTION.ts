m=1;n=1;for(i=1;i<100001;++i){if(a(i)>n){m=i;n=a(i)}}m;function a(i,g=1){return i==1?g:a(i%2?3*i+1:i/2,++g)}
