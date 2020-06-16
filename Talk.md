# Installation

```
skaffold version
v1.11.0

container-structure-test version
v1.9.0
```

- Open bootcamp-with-vuejs
- Create a cluster with that name
- `kubectl config use-context docker-for-desktop`

# Demo 1

- Launch vuejs npm server
  `npm start`
- Local vuejs changes
  Home.vue
- Local Dockerfile changes

```
$ docker image build -t gcr.io/skaffold-with-vuejs/zenika/bootcamp .
$ docker container run -it -d -p 8080:8080 gcr.io/skaffold-with-vuejs/zenika/bootcamp
```

Stop the container:
`docker container rm XX`

- Local Deployment changes

```
$ kubectl get pods
$ kubectl apply -f .k8s/service.yaml
$ kubectl apply -f .k8s/deployment.yaml
```

Delete K8S info

```

$ kubectl delete -f .k8s/deployment.yaml
deployment.apps "nginx" deleted
$ kubectl delete -f .k8s/service.yaml
service "bootcamp-vuejs-service" deleted
```

# Demo 2

Skaffold to reload
`skaffold dev`

Aggregated logs
-- File Sync ?
clean up when shutdown

Change
Using remote cluster
`gcloud container clusters get-credentials skaffold-with-vuejs --zone europe-west1-b`

port forwarding

`sudo skaffold dev --port-forward`

# Demo 3

Test-containers

```
container-structure-test test --image gcr.io/skaffold-with-vuejs/zenika/bootcamp --config ./structure-test.yaml
```

# Demo 4

Cloud Run
