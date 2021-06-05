# [Petclinic Performance Tests](https://github.com/mpbauer/petclinic-performance-tests)

This repository contains performance tests with Gatling for the following applications:

- [mpbauer/quarkus-petclinic-rest](https://github.com/mpbauer/quarkus-petclinic-rest)
- [mpbauer/quarkus-petclinic-rest-aws-lambda](https://github.com/mpbauer/quarkus-petclinic-rest-aws-lambda)
- [mpbauer/spring-petclinic-rest-slim](https://github.com/mpbauer/spring-petclinic-rest-slim)

You can execute all performance tests scenarios with the following command:
```shell
mvn clean gatling:test
```