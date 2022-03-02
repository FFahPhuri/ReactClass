import { View, Text } from "react-native";
import React from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
} from "native-base";
import axios from "axios";
import { Formik, Field } from "formik";
import * as Yup from "yup";

const ValidateSchema = Yup.object().shape({
  email: Yup.string()
    .email("รูปแบบ E-mail ไม่ถูกต้อง")
    .required("กรุณากรอกอีเมลใหม่"),
  password: Yup.string()
    .min(3, "รหัสผ่านต้องมี 3 ตัวอักษรขึ้นไป")
    .required("กรุณาป้อนรหัสผ่าน"),
});

const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <Content padder>
        <Formik
          // ค่าเริ่มต้นของข้อมูล โดยกำหนดให้ตรงกับ backend
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={ValidateSchema}
          //เมื่อคลิก register (submit)
          //   onSubmit={async (values, { setSubmitting }) => {
          // alert(JSON.stringify(values));
          // same shape as initial values
          // console.log(values);
          // try {
          //   const url = "https://api.codingthailand.com/api/register";
          //   const res = await axios.post(url, {
          //     email: values.email,
          //     password: values.password,
          //   });
          //   alert(res.data.message);
          // } catch (error) {
          //   //ถ้า save ข้อมูลลง server ไม่ได้
          //   alert(error.response.data.errors.email[0]);
          //   navigation.navigate("Home");
          // } finally {
          //   setSubmitting(false);
          //   //ให้ปุ่มใช้งานได้
          // }
          //   }}
        >
          {/* errors --> ใช้เช็ค error (State) เช่นผู้ใช้ไม่กรอกข้อมูล จะให้ขึ้นอะไร */}
          {/* touched เมื่อ user กด name แล้วไปทำอย่างอื่นนอกช่อง โดยที่ยังไม่ใส่ข้อมูล */}
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <Item
                fixedLabel
                error={errors.email && touched.email ? true : false}
              >
                <Label>Email</Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                {errors.email && touched.email && <Icon name="close-circle" />}
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.email}</Label>
                </Item>
              )}

              <Item
                fixedLabel
                last
                error={errors.password && touched.password ? true : false}
              >
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  keyboardType="number-pad"
                  secureTextEntry={true}
                />
                {errors.password && touched.password && (
                  <Icon name="close-circle" />
                )}
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.password}</Label>
                </Item>
              )}
              <Button
                // onPress={handleSubmit} //เปิด-ปิดปุ่ม
                // disabled={isSubmitting}
                block
                large
                style={{ marginTop: 30, backgroundColor: "#654321" }}
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                >
                  Login
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default LoginScreen;
