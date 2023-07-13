import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
} from "react-admin";

export const AmitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="UserName" source="userName" />
        <PasswordInput label="Password" source="password" />
      </SimpleForm>
    </Create>
  );
};
