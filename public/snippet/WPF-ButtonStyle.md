# 按钮样式

## 透明背景图标按钮，Hover/Press/Disable 时变更颜色

```xml
<SolidColorBrush x:Key="Button.Static.Foreground" Color="#ffffffff"/>
<SolidColorBrush x:Key="Button.MouseOver.Foreground" Color="#FFADB2B5"/>
<SolidColorBrush x:Key="Button.Pressed.Foreground" Color="#FFC4E5F6"/>
<SolidColorBrush x:Key="Button.Disabled.Foreground" Color="#FF838383"/>
<Style x:Key="TransparentButton" TargetType="{x:Type Button}">
    <Setter Property="FontFamily" Value="/NewPipelineP;component/Resources/#iconfont"/>
    <Setter Property="FontSize" Value="30"/>
    <Setter Property="Foreground" Value="{StaticResource Button.Static.Foreground}"/>
    <Setter Property="Template">
        <Setter.Value>
            <ControlTemplate TargetType="{x:Type Button}">
                <Border x:Name="border" CornerRadius="25" Background="Transparent" SnapsToDevicePixels="true">
                    <ContentPresenter x:Name="contentPresenter" Focusable="False" RecognizesAccessKey="True"
                                      SnapsToDevicePixels="{TemplateBinding SnapsToDevicePixels}"
                                      HorizontalAlignment="Center" VerticalAlignment="Center" Margin="0"/>
                </Border>
                <ControlTemplate.Triggers>
                    <Trigger Property="IsDefaulted" Value="true"/>
                    <Trigger Property="IsMouseOver" Value="true">
                        <Setter Property="TextElement.Foreground" TargetName="contentPresenter"
                                Value="{StaticResource Button.MouseOver.Foreground}"/>
                    </Trigger>
                    <Trigger Property="IsPressed" Value="true">
                        <Setter Property="TextElement.Foreground" TargetName="contentPresenter"
                                Value="{StaticResource Button.Static.Foreground}"/>
                    </Trigger>
                    <Trigger Property="IsEnabled" Value="false">
                        <Setter Property="TextElement.Foreground" TargetName="contentPresenter"
                                Value="{StaticResource Button.Disabled.Foreground}"/>
                    </Trigger>
                </ControlTemplate.Triggers>
            </ControlTemplate>
        </Setter.Value>
    </Setter>
</Style>
```