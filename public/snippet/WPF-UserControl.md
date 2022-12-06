# UserControl 设置项

## 需求：将 `UserControl` 内容的 `DataContext` 设置为自身

```xml
<UserControl x:Class="NewPipelineP.Controls.InspectionTracePlayer">
    <Grid Margin="16,8"
          DataContext="{Binding RelativeSource={RelativeSource Mode=FindAncestor, AncestorType=UserControl}}">
      <!-- contents -->
    </Grid>
</UserControl>
```
- 不能将绑定应用在 `UserControl` 上
  - 那样会影响该 `UserControl` 在应用层获得 `DataContext`
- 不能写为 `DataContext="{RelativeSource Mode=FindAncestor, AncestorType=UserControl}"`
  - 那样会获得的 `DataContext` 是一个 `RelativeSource` 对象，而非 `UserControl` 对象