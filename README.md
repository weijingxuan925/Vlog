# Vlog
# introduction
1. Designed and implemented a personal blog system using Spring Boot and MyBatis, deployed on AWS servers (and other
cloud server) utilizing various AWS services for security, high availability, and scalability.
2. Implemented RDS for user data storage, employed IaaS delivery model and ELB to ensure stable system performance
under high traffic.
3. Secured network environment using VPC and system updates and deployments using ECR and Docker. Monitored ongoing
costs with AWS Cost Manager.
4.  Enhanced user interactions through features for blog management and content classification with Redis.


# Author
- [JingxuanWei](jingxuanwei0@gmail.com)


## how to send to the docker
1. `docker build -t weijingxuan925/blog-app:latest .`
2. `docker login`
3. `docker push weijingxuan925/blog-app:latest`

## stop original docker 
1. `docker stop $(docker ps -aq)`
2. `docker rm $(docker ps -aq)`

## pull from docker
1. `docker pull weijingxuan925/blog-app:latest`
2. `docker run -d -p 8080:8080 --name blog-app weijingxuan925/blog-app:latest`
3. `docker logs blog-app`
4. `docker run -p 80:80 --name myproject --network host -e SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/flame -e  SPRING_DATASOURCE_USERNAME=root -e  SPRING_DATASOURCE_PASSWORD=Wjx20010925 weijingxuan925/vlog`
