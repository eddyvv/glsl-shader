#ifdef GL_ES
/* 内存精度 */
precision mediump float;
#endif
void main()
{
    vec3 color = vec3(1, 0, 1);
    gl_FragColor = vec4(color, 1);
}