type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  console.log("Update user details:", initialValues);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

createOrUpdateUser({
  name: "John",
  surname: "Doe",
  email: "john.doe@example.com",
  password: "newpassword123",
});
