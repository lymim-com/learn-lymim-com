# 查找指定类型的父级元素

```cs
private T FindAncestor<T>(DependencyObject element) {
  DependencyObject target = element;
  while (true) {
    target = VisualTreeHelper.GetParent(target);
    if (target is T presenter) {
      return presenter;
    }

    if (target == null) {
      return default;
    }
  }
}
```
