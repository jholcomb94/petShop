
package com.example.demo;

import java.sql.DriverManager;

public class TestConnection {
    public TestConnection() {
    }

    public static void main(String[] args) {
        String jdbcUrl = "jdbc:mysql://localhost:3306/pet_shop?useSSL=false&serverTimezone=UTC";
        String user = "pet_shop";
        String password = "pet_shop";

        try {
            System.out.println("Connecting to database: " + jdbcUrl);
            DriverManager.getConnection(jdbcUrl, user, password);
            System.out.println("Connection successful!!!");
        } catch (Exception var5) {
            var5.printStackTrace();
        }

    }
}
