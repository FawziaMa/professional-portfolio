//POST /login
pm.test("Token is returned", () => {
  const json = pm.response.json()
  pm.expect(json).to.have.property("token")
  pm.environment.set("authToken", json.token)
})

pm.test("Login fails with wrong credentials", () => {
  pm.response.to.have.status(401)
  const json = pm.response.json()
  pm.expect(json.message).to.eql("Invalid credentials");
})

pm.request.headers.add({
  key: "Authorization",
  value: "Bearer " + pm.environment.get("authToken")
})

//POST /logout 
pm.test("Logout successful", () => {
  pm.response.to.have.status(200)
  pm.environment.unset("authToken")
})

//GET /user/:id
pm.test("Response contains userId", function () {
  var jsonData = pm.response.json();
  pm.expect(jsonData).to.have.property("userId");
})

pm.test("Should be unauthorized after logout", () => {
  pm.response.to.have.status(401)
})


//POST /create
pm.test("Product created", () => {
  const resp = pm.response.json()
  pm.expect(resp).to.have.property("id")
  pm.environment.set("productId", resp.id)
})

//PUT /products/:id
pm.test("Product updated", () => {
  const resp = pm.response.json()
  pm.expect(resp.name).to.eql("New Name")
})

//DELETE /products/:id
pm.test("Product deleted", () => {
  pm.response.to.have.status(204);
})



//Mocking Data
pm.variables.replaceIn('{{$randomFirstName}}')
pm.variables.replaceIn('{{$randomLastName}}')
pm.variables.replaceIn('{{$randomEmail}}')
pm.variables.replaceIn('{{$randomPassword}}')



