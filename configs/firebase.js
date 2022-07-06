const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");
var admin = require("firebase-admin");

initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "vann-1a093",
    private_key_id: "aedcaa8d0961e3d0e81a06f43d0e7613d674550b",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDeuk5ZeOdF7jLy\nIEu3wdSuN8+Pdqod38e1xiLycV12+H6RtplxAkVcWkQqW+CSj2FtlNSEdkRwmtg2\n6DQBMqbSTWxq5CaVk01/8kKPoHrep9rd/pvxfWnt3Qv76VMUeF0Tj2FoqnnaJfb+\nAu1EMUdXLY+bMhzxA1eoVAp1sxdchQmAmAi54QUaRWGX7QECLU7pK8XpdiukwxAF\nIXXXJIIq+e09LTcxheLjlDIXhNZfPqGWrJ8oSOUgL26fw7VDltslnWVov3Uz2K9n\nzCmx2CbppJspg7U2A+fkByqUyWwBmDwjNPHqwH0XQTrv6lAtx4CoPoKoH4Ht2yVj\nO7vsHT1jAgMBAAECggEAERwZybjGd3JJep0tg+PBfVKvQLOadOoMcvPSGnLH/cww\nGOyAlBRbFLGge+qL8WZPUzY0LyrQrh/PDUTAPflQpGYrNnjpV+M1eGc5YsQuvC0D\n3Lri6uW5/fpVodf2OGPYrph8oKg77RyugSvjYzIv60wGNKNgYslhcf5mwUztNf+j\nilncayYeFUE5Cl+7eNnfpbDOskIQtKlAwG35KCppP1zC3tTTui8b7Cqy6u96PojP\n1rnNDl0T2N4K3D9R40cyEIY9JjGFtSDUn+FYKR02RFg4P3XSy5g9P89AFe9VwVnF\np422Dok++eqZC/b5qDsvyN8HdBqssrxmlUmWVhEswQKBgQD/fZfLBBgOj5I8xRtK\nNb+hSxf9PNHA0iFlsaPj/ZRIYhLWRa3toSeYxMgYQ96WzOAkwDIG7uf/5Fuvwk4d\ndDZFyWNCYp4oSsvCElLVCcgYYaK2r22muN3jwwfX3XzWHSUrO7AwMJrWK2xrn3Is\nM+xlNgmEZPyrI+ildDm7NX2sIwKBgQDfK/2IR6TZLtND9rRuyruaxk0fPeEojgnC\nCbjug+4SfWqs6ovLE327+6EAfz7C3RbL+4px+iqNa4d8VvRG2m7HQewzoS+RkxAK\nnL2X9RsL1VmAN/qIwoFF2VNUypm2yEcUzZ4meN3nPLP9E0vySTBA17yd5XcoLW23\nZoUi7U+dwQKBgG707m1e08vPEmWN/LIX8ads43g5Z6bkG1j88v5a7IEbBq9EB6tB\n595y56uSHiNDyrxrM87LBrqdRCxqqF4mUEOymIcGKUW6Zg9cwdh/rQTZsj7ApVBY\nzRTTaJ6ZNFQQyEmkXHoxQa1tomKDFqSX0DyMYUm8SfdRWwIwHbpuGqwdAoGADBQa\nbbTK9EI3hvckPtbUHoVbCTTVKde+KXVTP/199hw5mNA87qnIZVMyHI/Ges9ye2nK\nzW5nvS2zsIQYRnluA3TK7uRraaqW9KwVCtNmOla6uFjPQ3Wbf4dKnk000pK2Xibe\nx2BFSk2bxDe2JY/Wf7vtZnJT56XFyWZQEFrds0ECgYBUm22ZWALlQgEPB1HotLqv\niuRIPcg8/8ZssQAWCVq6T97WP4MQPaJ1b5xkArWQSkXXj1zwLiV8P2LTJgMCnj1d\nGli4usnbP+Wkl7MAt+HyTy6NRfNz8ExaTydvpWoeKy231gUxG9DJPzFILlSqWkhq\nh/b/17fEglCu3BldO84nfA==\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-napr5@vann-1a093.iam.gserviceaccount.com",
    client_id: "116486566803304349232",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-napr5%40vann-1a093.iam.gserviceaccount.com",
  }),
  databaseURL: "https://vann.firebaseio.com",
});

const db = getFirestore();

module.exports = { db };
