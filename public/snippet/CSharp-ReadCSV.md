# 读取 CSV 文件

## 反序列化

```cs
public static class CsvConvert {
  /// <summary>
  /// 将 CSV 字符串反序列化为对象列表。
  /// 第一行将被视为列头，并以此映射到属性；
  /// 当前仅支持字符串格式属性
  /// </summary>
  /// <typeparam name="T">目标类型</typeparam>
  /// <param name="value">原始值</param>
  /// <returns>对象列表</returns>
  public static List<T> DeserializeCollection<T>(string value) where T : new() {
    // 分行
    var lines = value.Split('\n')
      .Select(l => l.Trim())
      .Where(l => !string.IsNullOrWhiteSpace(l))
      .ToList();
    if (lines.Count < 1)
      return null;

    // 首行视为列头，映射到属性
    var firstLine = lines.First();
    var headers = firstLine.Split(',').ToList();
    var properties = typeof(T).GetProperties();

    // 构造 {属性，位置} 的集合，作为每行的映射规则
    var matches = headers.Join(properties,
      header => header, property => property.Name,
      (header, property) => new {
        Property = property,
        Index = headers.IndexOf(header),
      });

    // 构造对象集合，将每行映射到对象
    var objects = new List<T>();
    for (int i = 1; i < lines.Count; i++) {
      var obj = new T();
      var line = lines[i];
      var parts = line.Split(',');

      foreach (var match in matches)
        if (parts.Count() > match.Index)
          match.Property.SetValue(obj, parts[match.Index]);

      objects.Add(obj);
    }
    return objects;
  }
}
```

对于 CSV

```csv
Name,Phone,Email
Alice,12366666666,alice@email.com
Bob,12388888888,bob@email.com
Carol,12399999999,carol@email.com
```

会被反序列化为集合

```json
[
  {
    "Name": "Alice",
    "Phone": "12366666666",
    "Email": "alice@email.com"
  },
  {
    "Name": "Bob",
    "Phone": "12388888888",
    "Email": "bob@email.com"
  },
  {
    "Name": "Carol",
    "Phone": "12399999999",
    "Email": "carol@email.com"
  }
]
```

需要有正确的类定义

```cs
public class Person {
  public string Name { get; set; }
  public string Phone { get; set; }
  public string Email { get; set; }
}
```