# dgfc

> 一个SM.MS图床的上传工具.  

## 名称由来
脸滚键盘

## 打包

1. 获取nw.js的二进制包.  
2. 将项目用zip格式压缩.  
```
zip -r dgfc.nw ./* -x "./his.json" -x "./nw" -x "./nw*"
```
3. 将压缩好的文件与nw.js的二进制文件打包.  
```
# Linux
cat ./nw/nw dgfc.nw > ./nw/dgfc && chmod +x ./nw/dgfc

# Windows (未测试)
copy /b ./nw/nw.exe+dgfc.nw ./nw/dgfc.exe
```
