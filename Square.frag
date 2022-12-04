#ifdef GL_ES
/* 内存精度 */
precision mediump float;
#endif
/* 归一化坐标 */
uniform vec2 u_resolution;

float rectShape(vec2 pos, float scale)
{
    vec2 rect = vec2(1,1);
    rect= vec2(step(scale, pos.x), step(scale, pos.y));
    rect *= vec2(step(scale,1.-pos.x),step(scale,1.-pos.y));
    return rect.x*rect.y;
}

void main()
{
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color=vec3(rectShape(st,0.3));
    /* 输出颜色 */
    gl_FragColor = vec4(color, 1.0);

}
