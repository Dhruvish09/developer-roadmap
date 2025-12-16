# 🧠 Python Web Frameworks: Django Interview Guide

---

## 📌 Table of Contents

### Django

1. Django Basics
2. Views, URLs, and Templates
3. Models and ORM
4. Admin & Management
5. Django REST Framework
6. Security & Middleware
7. Caching & Performance
8. Advanced Concepts


## 🐍 DJANGO SECTION

### 1. How to Create JSON File in Django?

```python
import json
from django.http import JsonResponse

def create_json_file(request):
    data = {'name': 'John Doe', 'age': 30, 'city': 'New York'}
    json_data = json.dumps(data, indent=4)
    file_path = '/path/to/your/file/data.json'
    with open(file_path, 'w') as json_file:
        json_file.write(json_data)
    return JsonResponse({'message': 'JSON file created successfully'})
```

---

### 2. Decorators in Django

**Ans:** Decorators modify view behavior, e.g., for authentication:

```python
from functools import wraps
from django.http import HttpResponseForbidden

def user_authenticated(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        if request.user.is_authenticated:
            return view_func(request, *args, **kwargs)
        return HttpResponseForbidden("You must be logged in.")
    return _wrapped_view
```

---

### 3. What is Signal in Django?

**Ans:** Signals allow decoupled components to notify each other.

```python
from django.db.models.signals import post_save
from django.dispatch import receiver
from myapp.models import MyModel

@receiver(post_save, sender=MyModel)
def my_handler(sender, instance, created, **kwargs):
    if created:
        print("New instance created:", instance)
    else:
        print("Updated instance:", instance)
```

---

### 4. Combine Multiple Querysets

**Ans:**

```python
from itertools import chain
combined = list(chain(qs1, qs2))
```

---

### 5. Django Architecture

**Ans:** Follows MVT (Model-View-Template).

---

### 6. Request Lifecycle

```
User Request → manage.py → settings.py → urls.py → views.py → models.py → template
```

---

### 7. Why is Django Loosely Coupled?

**Ans:** Due to the separation in its MVT architecture.

---

### 8. Migrations

```bash
makemigrations       # Create migration files
migrate              # Apply migrations
showmigrations       # Show applied migrations
sqlmigrate app_name migration_name  # View SQL
```

---

### 9. CSRF Token

**Ans:** CSRF stands for Cross Site Request Forgery. Django protects forms using `csrf_token`.
Protects against cross-site request forgery attacks.
Ensures request came from authenticated user.
---

### 10. What is QuerySet?

**Ans:** A collection of database rows represented as model instances.

---

### 11. select\_related vs prefetch\_related

* **select\_related**: Forward relationships, efficient joins.
* **prefetch\_related**: Reverse/many-to-many, executes separate queries.

---

### 12. Django vs Flask vs Pyramid

| Framework | Type       | Use Case                           |
| --------- | ---------- | ---------------------------------- |
| Flask     | Micro      | Small apps                         |
| Pyramid   | Flexible   | Medium to large apps               |
| Django    | Full-stack | Large apps with batteries included |

---

### 13. Django Admin vs django-admin

* **Django Admin Panel**: GUI for managing models.
* **django-admin**: CLI for Django tasks.

---

### 14. Shortcut to Render HTML

**Ans:** `render()` or `render_to_response()`

---

### 15. Q Objects

**Ans:** For complex queries with `OR`:

```python
from django.db.models import Q
Model.objects.filter(Q(name__startswith='A') | Q(age__gte=30))
```

---

### 16. manage.py

**Ans:** CLI tool to manage Django project.

---

### 17. Middleware

**Ans:** Bridge between request and response.

---

### 18. Sessions

**Ans:** Persist user data between requests.

---

### 19. Django Exceptions

**Ans:** Errors in request/response, ORM, etc.

---

### 20. OneToOne vs ForeignKey

**Ans:**

* **OneToOneField**: 1-to-1 relationship
* **ForeignKey**: Many-to-1

---

### 21. Field Classes

**Ans:** Define model attributes like `CharField`, `IntegerField`, etc.

---

### 22. What is Jinja Templating?

**Ans:** A template engine for Python-based web frameworks.

---

### 23. Serialization

* Converts complex types to JSON/XML.
* **ModelSerializer**, **HyperlinkedModelSerializer**, **BaseSerializer**.

---

### 24. Generic Views vs APIView

* **Generic Views**: Pre-built for CRUD.
* **APIView**: Custom logic for HTTP methods.

---

### 25. Mixins

**Ans:** Reusable logic for CBVs.

---

### 26. Caching

**Ans:** Speeds up apps by storing frequent data.

* File-based
* In-memory
* Memcached
* DB caching

---

### 27. User Permissions & Access Control

* Decorators: `@permission_required`, `@user_passes_test`
* Mixins: `PermissionRequiredMixin`
* Object-level: via `has_perm()`

---

### 28. Permission Classes (DRF)

* `AllowAny`
* `IsAuthenticated`
* `IsAdminUser`
* `IsAuthenticatedOrReadOnly`

---

### 29. Throttling

* `AnonRateThrottle`
* `UserRateThrottle`
* `ScopedRateThrottle`

---

### 30. values vs values\_list

```python
Model.objects.values('field')        # Dict
Model.objects.values_list('field')   # Tuple
```

---

### 31. APIView vs ViewSet

* **APIView**: Custom behavior per HTTP method.
* **ViewSet**: Manages full CRUD.

---

### 32. Signal vs Celery

* **Signal**: Sync event system.
* **Celery**: Async task queue.

---

### 33. Celery Workers vs Beat

* **Worker**: Executes tasks.
* **Beat**: Scheduler for periodic tasks.

---

### 34. Template Inheritance

**Ans:** Avoid redundancy by extending base templates.

---

### 35. Why Django is Preferred?

* Modular, secure, admin-ready
* Python-based
* DRY principle
* MVT architecture

---

### 36. Django Drawbacks

* Monolithic structure
* Heavy ORM dependence
* Lack of convention over configuration

---

### 37. Companies using Django

* Instagram
* Pinterest
* Mozilla
* Reddit
* YouTube

---

### 38. Advanced Topics Checklist

* Django Forms & Validation
* Authentication Middleware
* Testing Strategies
* Performance Optimization
* Security Best Practices

---

### 39. URL Routing to View – Full simple workflow

```
Browser URL  
   ↓  
Project urls.py  
   ↓  
App urls.py  
   ↓  
Matched View  
   ↓  
View returns response (HTML/JSON)
```


🟢 **Easy Interview Example Answer**

**Q:** *How does Django map a URL to a view?*

> Django uses URL routing. When a request comes in, Django checks `urls.py`.
> It matches the URL pattern and maps it to the corresponding view function or class.
> The matched view receives the request object, processes it, and returns an HttpResponse.

---


### 40. How a View Interacts With a Model in Django

```
User Request
      ↓
URL Router maps to View
      ↓
View queries Model (ORM)
      ↓
View gets data from database
      ↓
View returns Response (HTML/JSON)
```


**Easy Interview Example Answer**

> A Django **view** interacts with a **model** by querying the model (using ORM) to fetch, create, update, or delete data.
> The view then processes that data and returns an HTTP response (HTML/JSON).

---


### 41 **Django Template Rendering – Full Flow**

```
User Request  
     ↓  
URL Router  
     ↓  
View executes  
     ↓  
View fetches data from model  
     ↓  
render(request, template, context)  
     ↓  
Template engine fills placeholders  
     ↓  
Final HTML returned to browser
```


🎯 Interview-Ready One-Line Answer

> **The view uses Django’s template engine to merge HTML templates with context data using `render()`, and the resulting HTML is returned as the response.**

---

### 42 Response Returned in Django


View generates a response

* `HttpResponse("Hello")`
* `JsonResponse({"status": "ok"})`
* `render(request, "template.html", context)`

```
View                  → returns HttpResponse
Middleware (reverse)  → modifies/inspects it
WSGI Layer            → prepares final HTTP response
Browser               → receives content
```

---

🎯 **Interview-Friendly One-Line Summary**

> A “response returned” means the view has finished its logic and given Django an HttpResponse object, which is then processed by middleware and sent back to the client.

---


### 43 Abstract User Base in Django

**In Django, Abstract User Base refers to creating a custom user model using `AbstractUser` or `AbstractBaseUser` to customize authentication behavior.**

---

✅ Why we use Abstract User Base?

The default Django `User` model is limited:

* Username is mandatory
* Email is not unique
* Hard to add custom fields

So Django provides **abstract base classes** to create flexible user models.

---

1️⃣ `AbstractUser` (Most commonly used)

**Explanation:**

> `AbstractUser` is an abstract version of Django’s default user model. It already includes username, email, password, permissions, and admin support. We extend it to add extra fields.

**When to use:**

* Small customization needed
* Want to keep username login
* Faster and safer

**Example:**

```python
class User(AbstractUser):
    phone = models.CharField(max_length=15)
```

---

2️⃣ `AbstractBaseUser` (Advanced)

**Explanation:**

> `AbstractBaseUser` provides only core authentication features like password hashing and last login. We must define fields, user manager, permissions, and login logic ourselves.

**When to use:**

* Email or phone based login
* Full control over authentication
* Complex business requirements