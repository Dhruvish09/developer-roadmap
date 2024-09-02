# Django ORM

## 1. Create Table
        from django.db import models

        class MyModel(models.Model):
            id = models.AutoField(primary_key=True)
            name = models.CharField(max_length=100)
            description = models.TextField()
            email = models.EmailField()
            age = models.IntegerField()
            account_balance = models.DecimalField(max_digits=10, decimal_places=2)
            height = models.FloatField()
            is_active = models.BooleanField(default=False)
            birth_date = models.DateField()
            last_updated = models.DateTimeField()
            appointment_time = models.TimeField()
            website_url = models.URLField()
            document_file = models.FileField(upload_to='uploads/')
            profile_picture = models.ImageField(upload_to='images/')
            related_model = models.ForeignKey('AnotherModel', on_delete=models.CASCADE)
            related_models = models.ManyToManyField('YetAnotherModel')

        class AnotherModel(models.Model):
            # Define fields for AnotherModel
            pass
        
        class YetAnotherModel(models.Model):
            # Define fields for YetAnotherModel
            pass

## 2. Select data
    User.objects.filter(gender='F')

## 3. Operators

- **IN Operator:**
  The `IN` operator is used to filter querysets based on whether a field's value is within a given list of values.
    ```python
        User.objects.filter(gender__in=['M', 'F'])
    ```

- **LIKE Operator:**
    ```python
        matching_users = User.objects.filter(Q(name__icontains='John') | Q(email__icontains='example.com'))
        for user in matching_users:
            print(user.name, user.email)
    ```

## 4. ORDER BY
    asceding_ordered = User.objects.order_by('name') # Return asceding order record
    descending_ordered = User.objects.order_by('-name') # Return descending order record

## 5. IS NULL and IS NOT NULL

- **IS NULL:**
    ```python
        users_with_null_mobile = User.objects.filter(mobile__isnull=True)
    ```

- **IS NOT NULL:**
    ```python
        users_with_mobile = User.objects.exclude(mobile__isnull=True)
    ```

## 6. Update and Delete

- **Update:**
    ```python
        student = Student.objects.get(id=4)
        student.age = 25
        student.save()
    ```

- **Delete:**
    ```python
        Student.objects.filter(id=4).delete()
    ```

## 7. GROUP BY and HAVING

- **GROUP BY:**
    GROUP BY in Django ORM is achieved using the values() method to specify the fields you want to group your query results by. It organizes the results into groups based on one or more columns.
    ```python
        Order.objects.values('customer_id').annotate(total_quantity=Sum('quantity'))
    ```

- **HAVING:**
    HAVING in Django ORM is performed using the annotate() method to calculate aggregates and then the filter() method to apply conditions on those aggregated results, similar to the SQL HAVING clause.
    ```python
        Order.objects.values('customer_id').annotate(total_quantity=Sum('quantity')).filter(total_quantity__gt=100)
    ```
