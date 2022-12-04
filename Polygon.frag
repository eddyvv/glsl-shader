#ifdef GL_ES
/* 内存精度 */
precision mediump float;
#endif
const float PI=3.1415926;
/* 归一化坐标 */
uniform vec2 u_resolution;

float PolyShape(vec2 pos, float radius, float sideCount)
{
    pos=pos-0.5;
    float angle=atan(pos.y,pos.x);
    //return angle/(2.*PI)+0.5;
    /* 切片，需求切多少多边形 */
    float slice=PI*2.0/sideCount;
    float poly=angle;

    poly=length(pos);
    poly=0.5+angle/slice;
    poly=floor(poly);
    poly*=slice;
    poly-=angle;
    poly=cos(poly);
    poly*=length(pos);
    poly=step(radius,poly);

     return poly;
}

void main()
{
    vec2 pos = gl_FragCoord.xy/u_resolution;
    vec3 color=vec3(PolyShape(pos, 0.2, 8.0),0.4,0.1);
    /* 输出颜色 */
    gl_FragColor = vec4(color, 1.0);

}
