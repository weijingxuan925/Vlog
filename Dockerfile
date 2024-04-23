# 使用官方Java运行环境作为基础镜像
FROM openjdk:11

# 将工作目录设置为/app
WORKDIR /app

# 将你的jar文件复制到容器中
COPY target/Blog.jar /app/Blog.jar

# 暴露容器的8080端口
EXPOSE 8080

# 启动Spring Boot应用
CMD ["java", "-jar", "/app/Blog.jar"]
