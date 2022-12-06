# TreeView

## 将 `TreeView` 的选中项推送到 VM

```cs
private void TreeView_SelectedItemChanged(object sender, RoutedPropertyChangedEventArgs<object> e) {
  if (sender is TreeView tv &&
      tv.DataContext is StaffInGalleryDetailViewModel vm &&
      e.NewValue is StaffGroup sg)
  {
    vm.SelectedGroup = sg;
  }
}
```

## `TreeView` 加载后默认选中第一项

```cs
private void TreeView_Loaded(object sender, RoutedEventArgs e) {
  if (sender is TreeView tv) {
    var firstItem = tv.Items.GetItemAt(0);
    var tvContainer = tv.ItemContainerGenerator.ContainerFromItem(firstItem);

    if (tvContainer is TreeViewItem tvItem) {
      tvItem.IsSelected = true;
    }
  }
}
```
