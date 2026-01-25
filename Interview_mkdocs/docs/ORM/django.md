# 🟢 1. CREATE (INSERT)

```
User.objects.create(name="John", age=25)

u = User(name="John", age=25)
u.save()

User.objects.bulk_create([
    User(name="A"),
    User(name="B")
])

Order.objects.create(user=user_obj, total=100)

user.groups.add(group_obj)
```

---

# 🔵 2. READ (SELECT)

## 2.1 Basic Select

```
User.objects.all()

User.objects.get(id=1)

User.objects.filter(age=25)

User.objects.exclude(age=25)
```

---

## 2.2 Conditions

### AND

```
User.objects.filter(age=25, is_active=True)
```

### OR

```
User.objects.filter(Q(age=20) | Q(age=30))
```

### IN

```
User.objects.filter(id__in=[1, 2, 3])
```

### NOT IN

```
User.objects.exclude(id__in=[1, 2, 3])
```

---

## 2.3 LIKE / SEARCH

```
User.objects.filter(name__icontains="john")

User.objects.filter(name__startswith="A")

User.objects.filter(name__endswith="Z")
```

---

## 2.4 NULL Checks

```
User.objects.filter(email__isnull=True)

User.objects.filter(email__isnull=False)
```

---

## 2.5 ORDER / LIMIT

```
User.objects.order_by("name")

User.objects.order_by("-name")

User.objects.all()[:5]

User.objects.all()[5:10]
```

---

## 2.6 Values / Optimization

```
User.objects.values("id", "name")

User.objects.values_list("name", flat=True)

User.objects.distinct()

User.objects.count()

User.objects.exists()
```

---

## 2.7 Joins

```
Order.objects.select_related("user")

User.objects.prefetch_related("groups")
```

---

# 🟡 3. UPDATE

## 3.1 Single Record

```
u = User.objects.get(id=1)
u.age = 30
u.save()
```

---

## 3.2 Multiple Records

```
User.objects.filter(age=20).update(age=21)
```

---

## 3.3 Using F Expressions

```
User.objects.update(age=F("age") + 1)
```

---

## 3.4 Relations

```
user.groups.remove(group_obj)

user.groups.clear()
```

---

# 🔴 4. DELETE

```
User.objects.get(id=1).delete()

User.objects.filter(age__lt=18).delete()

User.objects.all().delete()
```

---

# 🟣 5. AGGREGATION (GROUP BY / HAVING)

## GROUP BY

```
Order.objects.values("user_id")
     .annotate(total=Sum("amount"))
```

---

## HAVING

```
Order.objects.values("user_id")
     .annotate(total=Sum("amount"))
     .filter(total__gt=100)
```

---

## Aggregates

```
User.objects.aggregate(Max("age"))

User.objects.aggregate(Min("age"))

User.objects.aggregate(Avg("age"))

Order.objects.aggregate(Sum("amount"))
```

---

# ⚡ 6. DATE / RANGE FILTERS

```
User.objects.filter(age__range=(18, 30))

User.objects.filter(created_at__date="2025-01-01")

User.objects.filter(created_at__year=2025)
```

---

# ✅ HOW TO REMEMBER (INTERVIEW TIP)

```
CREATE  → create(), save(), bulk_create()
READ    → filter(), get(), exclude(), order_by()
UPDATE  → update(), save(), F()
DELETE  → delete()
GROUP   → values() + annotate() + filter()
```

---