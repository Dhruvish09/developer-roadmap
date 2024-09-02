# Flask ORM

## 1. Create Table
    from flask_sqlalchemy import SQLAlchemy

    db = SQLAlchemy()

    class User(db.Model):
        __tablename__ = 'users'

        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String(100))
        email = db.Column(db.String(150))
        password = db.Column(db.String(100))
        mobile = db.Column(db.String(15))
        gender = db.Column(db.Enum('M', 'F', 'O'))
        dob = db.Column(db.Date)
        status = db.Column(db.Boolean)

## 1. Select data
    User.query.filter_by(gender='F').all()

## 2. Operators

- **IN Operator:**
  The `IN` operator is used to filter querysets based on whether a field's value is within a given list of values.
    ```python
        User.query.filter(User.gender.in_(['M', 'F'])).all()
    ```

- **LIKE Operator:**
    ```python
        matching_users = User.query.filter(or_(User.name.ilike('%John%'), User.email.ilike('%example.com%'))).all()
        for user in matching_users:
            print(user.name, user.email)  # Accessing user attributes
    ```

## 3. ORDER BY
    User.query.order_by(User.name.asc()).all() # Return asceding order record
    User.query.order_by(User.name.desc()).all() # Return descending order record


## 4. IS NULL and IS NOT NULL

- **IS NULL:**
    ```python
        User.query.filter(User.mobile == null()).all()
    ```

- **IS NOT NULL:**
    ```python
        User.query.filter(User.mobile.isnot(None)).all()
    ```

## 4. Update and Delete

- **Update:**
    ```python
        # Update the age for the student with id=4
        student = Student.query.filter_by(id=4).first()
        student.age = 25
        db.session.commit()
    ```

- **Delete:**
    ```python
        # Delete the student with id=4
        student = Student.query.filter_by(id=4).first()
        db.session.delete(student)
        db.session.commit()
    ```

## 4. GROUP BY and HAVING

- **GROUP BY:**
    GROUP BY in SQLAlchemy ORM is achieved using the group_by() method to specify the fields you want to group your query results by. It organizes the results into groups based on one or more columns.    
    ```python
        from sqlalchemy import func

        query = db.session.query(
            Order.customer_id, func.sum(Order.quantity).label('total_quantity')
        ).group_by(Order.customer_id)
    ```

- **HAVING:**
    HAVING in SQLAlchemy ORM is performed using the having() method to apply conditions on the aggregated results, similar to the SQL HAVING clause.
    ```python
        from sqlalchemy import func
        query = db.session.query(Order.customer_id, func.sum(Order.quantity).label('total_quantity'))
                .group_by(Order.customer_id).having(func.sum(Order.quantity) > 100)

    ```
