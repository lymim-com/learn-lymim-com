# 调色板

## 代码

```xml
<Rectangle Width="200" Height="200">
  <Rectangle.Fill>
    <DrawingBrush xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation">
      <DrawingBrush.Drawing>
        <DrawingGroup>
          <DrawingGroup.Children>
            <GeometryDrawing>
              <GeometryDrawing.Brush>
                <LinearGradientBrush EndPoint="0,0.5" StartPoint="1,0.5">
                  <LinearGradientBrush.GradientStops>
                    <GradientStop Color="#FF0033FF" Offset="0" />
                    <GradientStop Color="#FFFFFFFF" Offset="1" />
                  </LinearGradientBrush.GradientStops>
                </LinearGradientBrush>
              </GeometryDrawing.Brush>
              <GeometryDrawing.Geometry>
                <RectangleGeometry Rect="0,0,1,1" />
              </GeometryDrawing.Geometry>
            </GeometryDrawing>
            <GeometryDrawing>
              <GeometryDrawing.Brush>
                <LinearGradientBrush EndPoint="0.5,0" StartPoint="0.5,1">
                  <LinearGradientBrush.GradientStops>
                    <GradientStop Color="#FF000000" Offset="0" />
                    <GradientStop Color="#00000000" Offset="1" />
                  </LinearGradientBrush.GradientStops>
                </LinearGradientBrush>
              </GeometryDrawing.Brush>
              <GeometryDrawing.Geometry>
                <RectangleGeometry Rect="0,0,1,1" />
              </GeometryDrawing.Geometry>
            </GeometryDrawing>
          </DrawingGroup.Children>
        </DrawingGroup>
      </DrawingBrush.Drawing>
    </DrawingBrush>
  </Rectangle.Fill>
</Rectangle>
```

## 效果

<style>
.palette { height: 200px; width:200px; }
.fill { position: absolute }
.white-to-right { background: linear-gradient(90deg, white, #fff0 100%) }
.black-to-top { background: linear-gradient(180deg, #0000, black 100%) }
</style>
<div class="palette" style="background: #0033FF;">
  <div class="palette fill white-to-right"></div>
  <div class="palette fill black-to-top"></div>
</div>
