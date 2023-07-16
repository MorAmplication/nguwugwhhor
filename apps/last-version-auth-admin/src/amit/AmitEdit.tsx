import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
} from "react-admin";

export const AmitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="UserName" source="userName" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
