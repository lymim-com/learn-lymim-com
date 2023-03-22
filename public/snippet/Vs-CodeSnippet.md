# VsSnippet

## 使用方法

- 参考 https://docs.microsoft.com/en-us/visualstudio/ide/walkthrough-creating-a-code-snippet?view=vs-2019

## propinref.snippet

```xml
<?xml version="1.0" encoding="utf-8"?>
<CodeSnippets xmlns="http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet">
    <CodeSnippet Format="1.0.0">
        <Header>
            <Title>propinref</Title>
            <Shortcut>propinref</Shortcut>
            <Description>
        自动实现更新属性的代码片段
        语言版本:  C# 3.0 或更高版本
        </Description>
            <Author>Lymim</Author>
            <SnippetTypes>
                <SnippetType>Expansion</SnippetType>
            </SnippetTypes>
        </Header>
        <Snippet>
            <Declarations>
                <Literal>
                    <ID>type</ID>
                    <ToolTip>Property type</ToolTip>
                    <Default>int</Default>
                </Literal>
                <Literal>
                    <ID>property</ID>
                    <ToolTip>Property name</ToolTip>
                    <Default>MyProperty</Default>
                </Literal>
        <Literal>
            <ID>field</ID>
            <ToolTip>The variable backing this property</ToolTip>
            <Default>myVar</Default>
        </Literal>
        </Declarations>
            <Code Language="csharp">
        <![CDATA[
    private $type$ $field$;

    public $type$ $property$
    {
    get { return $field$; }
    set { SetProperty(ref $field$, value);}
    }
        $end$]]>
            </Code>
        </Snippet>
    </CodeSnippet>
</CodeSnippets>
```

## propinref.snippet

```xml
<?xml version="1.0" encoding="utf-8"?>
<CodeSnippets xmlns="http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet">
    <CodeSnippet Format="1.0.0">
        <Header>
            <Title>propnoc</Title>
            <Shortcut>propnoc</Shortcut>
            <Description>
        自动实现更新属性的代码片段，添加 NotifyOfPropertyChange()
        语言版本:  C# 3.0 或更高版本
      </Description>
            <Author>Lymim</Author>
            <SnippetTypes>
                <SnippetType>Expansion</SnippetType>
            </SnippetTypes>
        </Header>
        <Snippet>
            <Declarations>
                <Literal>
                    <ID>type</ID>
                    <ToolTip>Property type</ToolTip>
                    <Default>int</Default>
                </Literal>
                <Literal>
                    <ID>property</ID>
                    <ToolTip>Property name</ToolTip>
                    <Default>MyProperty</Default>
                </Literal>
        <Literal>
          <ID>field</ID>
          <ToolTip>The variable backing this property</ToolTip>
          <Default>myVar</Default>
        </Literal>
      </Declarations>
            <Code Language="csharp">
        <![CDATA[
private $type$ $field$;

public $type$ $property$
{
    get { return $field$; }
    set
    {
        $field$ = value;
        NotifyOfPropertyChange();
    }
}
      $end$]]>
            </Code>
        </Snippet>
    </CodeSnippet>
</CodeSnippets>
```
