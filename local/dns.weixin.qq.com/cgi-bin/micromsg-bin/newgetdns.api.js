
var client = window.client;
XHRMock.get(
    "http://dns.weixin.qq.com/cgi-bin/micromsg-bin/newgetdns?uin=26763965&clientversion=385876519&scene=0&net=1&md5=c96b81ed62ff5023ec9f18e7e69edeb5&devicetype=iOS12.1.2&lan=zh_CN&sigver=2",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header('Cache-Control', 'no-cache').header('Content-Type', 'text/xml').header('Connection', 'close');
        resp = resp.body('<?xml version="1.0" encoding="utf-8"?>
<dns>
<retcode>0</retcode>
<domainlist>
<domain name="extshort.weixin.qq.com" timeout="600">
<ip>101.89.15.101</ip>
<ip>101.89.15.100</ip>
<ip>101.226.49.144</ip>
<ip>101.226.49.141</ip>
<ip>101.226.211.44</ip>
<ip>101.226.211.101</ip>
</domain>
<domain name="localhost" timeout="600">
<ip>127.0.0.1</ip>
</domain>
<domain name="long.weixin.qq.com" timeout="600">
<ip>101.89.15.106</ip>
<ip>101.89.15.105</ip>
<ip>101.226.49.147</ip>
<ip>101.226.49.140</ip>
<ip>101.226.211.46</ip>
<ip>101.226.211.105</ip>
</domain>
<domain name="minorshort.weixin.qq.com" timeout="600">
<ip>61.151.224.41</ip>
<ip>61.151.183.16</ip>
<ip>101.227.169.159</ip>
</domain>
<domain name="mlextshort.weixin.qq.com" timeout="600">
<ip>220.171.124.105</ip>
<ip>220.171.124.102</ip>
</domain>
<domain name="mllong.weixin.qq.com" timeout="600">
<ip>220.171.124.107</ip>
<ip>220.171.124.104</ip>
</domain>
<domain name="mlminorshort.weixin.qq.com" timeout="600">
<ip>220.171.124.113</ip>
</domain>
<domain name="mlshort.pay.weixin.qq.com" timeout="600">
<ip>220.171.124.11</ip>
</domain>
<domain name="mlshort.weixin.qq.com" timeout="600">
<ip>220.171.124.105</ip>
<ip>220.171.124.102</ip>
</domain>
<domain name="newyear.weixin.qq.com" timeout="600">
<ip>180.153.160.11</ip>
</domain>
<domain name="sh2tjextshort.weixin.qq.com" timeout="600">
<ip>101.89.15.101</ip>
<ip>101.89.15.100</ip>
<ip>101.226.49.144</ip>
<ip>101.226.49.141</ip>
<ip>101.226.211.44</ip>
<ip>101.226.211.101</ip>
</domain>
<domain name="sh2tjlong.weixin.qq.com" timeout="600">
<ip>123.151.10.186</ip>
</domain>
<domain name="sh2tjminorshort.weixin.qq.com" timeout="600">
<ip>61.151.224.41</ip>
<ip>61.151.183.16</ip>
<ip>101.227.169.159</ip>
</domain>
<domain name="sh2tjshort.weixin.qq.com" timeout="600">
<ip>123.151.10.185</ip>
</domain>
<domain name="shextshort.weixin.qq.com" timeout="600">
<ip>101.89.15.101</ip>
<ip>101.89.15.100</ip>
<ip>101.226.49.144</ip>
<ip>101.226.49.141</ip>
<ip>101.226.211.44</ip>
<ip>101.226.211.101</ip>
</domain>
<domain name="short.pay.weixin.qq.com" timeout="600">
<ip>180.163.25.142</ip>
<ip>101.226.211.100</ip>
</domain>
<domain name="short.weixin.qq.com" timeout="600">
<ip>101.89.15.101</ip>
<ip>101.89.15.100</ip>
<ip>101.226.49.144</ip>
<ip>101.226.49.141</ip>
<ip>101.226.211.44</ip>
<ip>101.226.211.101</ip>
</domain>
<domain name="shshort.pay.weixin.qq.com" timeout="600">
<ip>180.163.25.142</ip>
<ip>101.226.211.100</ip>
</domain>
<domain name="sz2tjextshort.weixin.qq.com" timeout="600">
<ip>183.3.234.105</ip>
<ip>183.3.234.100</ip>
<ip>183.3.224.144</ip>
<ip>183.3.224.141</ip>
<ip>113.96.209.100</ip>
<ip>113.96.202.100</ip>
</domain>
<domain name="sz2tjlong.weixin.qq.com" timeout="600">
<ip>123.151.10.186</ip>
</domain>
<domain name="sz2tjminorshort.weixin.qq.com" timeout="600">
<ip>183.61.46.199</ip>
<ip>14.18.245.167</ip>
<ip>14.17.42.45</ip>
</domain>
<domain name="sz2tjshort.weixin.qq.com" timeout="600">
<ip>123.151.10.185</ip>
</domain>
<domain name="szextshort.weixin.qq.com" timeout="600">
<ip>183.3.234.105</ip>
<ip>183.3.234.100</ip>
<ip>183.3.224.141</ip>
<ip>113.96.209.101</ip>
<ip>113.96.202.101</ip>
<ip>113.96.202.100</ip>
</domain>
<domain name="szlong.weixin.qq.com" timeout="600">
<ip>183.3.224.146</ip>
<ip>183.3.224.139</ip>
<ip>14.215.158.119</ip>
<ip>14.215.158.102</ip>
<ip>113.96.202.106</ip>
<ip>113.96.202.105</ip>
</domain>
<domain name="szminorshort.weixin.qq.com" timeout="600">
<ip>183.61.46.199</ip>
<ip>14.18.245.167</ip>
<ip>14.17.42.45</ip>
</domain>
<domain name="szshort.pay.weixin.qq.com" timeout="600">
<ip>183.3.234.104</ip>
<ip>183.3.224.143</ip>
</domain>
<domain name="szshort.weixin.qq.com" timeout="600">
<ip>183.3.234.100</ip>
<ip>183.3.224.144</ip>
<ip>183.3.224.141</ip>
<ip>14.215.158.100</ip>
<ip>113.96.209.101</ip>
<ip>113.96.209.100</ip>
</domain>
<domain name="tjextshort.weixin.qq.com" timeout="600">
<ip>183.3.234.105</ip>
<ip>183.3.234.100</ip>
<ip>183.3.224.144</ip>
<ip>14.215.158.101</ip>
<ip>113.96.209.101</ip>
<ip>113.96.202.100</ip>
</domain>
<domain name="tjlong.weixin.qq.com" timeout="600">
<ip>123.151.10.186</ip>
</domain>
<domain name="tjshort.weixin.qq.com" timeout="600">
<ip>123.151.10.185</ip>
</domain>
<domain name="caextshort.weixin.qq.com" timeout="600">
<ip>183.3.234.11</ip>
<ip>113.96.209.108</ip>
</domain>
<domain name="calong.weixin.qq.com" timeout="600">
<ip>183.3.234.109</ip>
<ip>14.17.41.157</ip>
</domain>
<domain name="caminorshort.weixin.qq.com" timeout="600">
<ip>183.3.234.11</ip>
<ip>113.96.209.108</ip>
</domain>
<domain name="cashort.pay.weixin.qq.com" timeout="600">
<ip>183.3.234.111</ip>
</domain>
<domain name="cashort.weixin.qq.com" timeout="600">
<ip>183.3.234.11</ip>
<ip>113.96.209.108</ip>
</domain>
<domain name="hkextshort.weixin.qq.com" timeout="600">
<ip>183.3.234.11</ip>
<ip>113.96.209.108</ip>
</domain>
<domain name="hklong.weixin.qq.com" timeout="600">
<ip>183.3.234.109</ip>
<ip>14.17.41.157</ip>
</domain>
<domain name="hkminorshort.weixin.qq.com" timeout="600">
<ip>183.3.234.11</ip>
<ip>113.96.209.108</ip>
</domain>
<domain name="hkshort.pay.weixin.qq.com" timeout="600">
<ip>183.3.234.111</ip>
</domain>
<domain name="hkshort.weixin.qq.com" timeout="600">
<ip>183.3.234.11</ip>
<ip>113.96.209.108</ip>
</domain>
<domain name="hkshort6.weixin.qq.com" timeout="600">
<ip>183.3.234.11</ip>
<ip>113.96.209.108</ip>
</domain>
<domain name="emoji.qpic.cn" timeout="600">
<ip property="major">1.199.93.252</ip>
</domain>
<domain name="mmsns.qpic.cn" timeout="600">
<ip property="major">123.161.60.151</ip>
<ip property="major">123.161.60.152</ip>
<ip property="major">123.161.60.153</ip>
<ip property="major">123.161.60.154</ip>
<ip property="major">123.161.60.155</ip>
<ip property="major">123.161.60.156</ip>
<ip property="major">123.161.60.157</ip>
<ip property="major">123.161.60.158</ip>
<ip property="major">123.161.60.159</ip>
<ip property="major">123.161.60.160</ip>
<ip property="major">123.161.60.162</ip>
<ip property="major">123.161.60.163</ip>
<ip property="major">123.161.60.164</ip>
<ip property="major">123.161.60.165</ip>
<ip property="major">123.161.60.166</ip>
<ip property="major">123.161.60.168</ip>
<ip property="major">123.161.60.201</ip>
<ip property="major">123.161.60.202</ip>
</domain>
<domain name="resstatic.servicewechat.com" timeout="600">
<ip property="major">1.199.93.219</ip>
<ip property="major">1.198.5.213</ip>
<ip property="major">1.198.5.85</ip>
</domain>
<domain name="shmmsns.qpic.cn" timeout="600">
<ip property="major">123.161.60.151</ip>
<ip property="major">123.161.60.152</ip>
<ip property="major">123.161.60.153</ip>
<ip property="major">123.161.60.154</ip>
<ip property="major">123.161.60.155</ip>
<ip property="major">123.161.60.156</ip>
<ip property="major">123.161.60.157</ip>
<ip property="major">123.161.60.158</ip>
<ip property="major">123.161.60.159</ip>
<ip property="major">123.161.60.160</ip>
<ip property="major">123.161.60.162</ip>
<ip property="major">123.161.60.163</ip>
<ip property="major">123.161.60.164</ip>
<ip property="major">123.161.60.165</ip>
<ip property="major">123.161.60.166</ip>
<ip property="major">123.161.60.168</ip>
<ip property="major">123.161.60.201</ip>
<ip property="major">123.161.60.202</ip>
<ip property="minor">101.91.69.149</ip>
<ip property="minor">101.91.69.151</ip>
<ip property="minor">101.91.69.152</ip>
<ip property="minor">180.97.10.105</ip>
<ip property="minor">180.97.10.106</ip>
<ip property="minor">180.97.10.23</ip>
<ip property="minor">180.97.10.24</ip>
<ip property="minor">180.97.10.27</ip>
<ip property="minor">180.97.10.28</ip>
<ip property="minor">180.97.10.34</ip>
<ip property="minor">180.97.10.35</ip>
<ip property="minor">180.97.10.36</ip>
<ip property="minor">180.97.10.38</ip>
<ip property="minor">180.97.10.39</ip>
<ip property="minor">180.97.10.41</ip>
<ip property="minor">180.97.10.42</ip>
<ip property="minor">180.97.10.43</ip>
<ip property="minor">180.97.8.112</ip>
<ip property="minor">180.97.8.12</ip>
<ip property="minor">180.97.8.16</ip>
<ip property="minor">180.97.8.26</ip>
<ip property="minor">180.97.8.27</ip>
<ip property="minor">180.97.8.29</ip>
<ip property="minor">180.97.8.31</ip>
<ip property="minor">180.97.8.37</ip>
<ip property="minor">180.97.8.45</ip>
</domain>
<domain name="shp.qlogo.cn" timeout="600">
<ip property="major">61.151.168.227</ip>
<ip property="major">61.151.183.44</ip>
<ip property="major">180.97.9.11</ip>
<ip property="major">180.97.9.100</ip>
<ip property="major">101.226.212.107</ip>
<ip property="major">101.226.76.160</ip>
<ip property="major">101.226.90.145</ip>
<ip property="major">61.151.168.141</ip>
<ip property="major">101.91.63.156</ip>
<ip property="major">101.91.63.157</ip>
<ip property="major">61.151.206.58</ip>
<ip property="major">101.91.63.158</ip>
<ip property="major">180.97.117.116</ip>
<ip property="major">180.97.117.108</ip>
<ip property="major">180.97.117.100</ip>
<ip property="major">180.97.9.124</ip>
<ip property="major">180.97.9.123</ip>
<ip property="major">180.97.9.125</ip>
<ip property="major">180.97.117.101</ip>
<ip property="major">180.97.9.122</ip>
<ip property="major">180.97.8.103</ip>
<ip property="major">180.97.117.50</ip>
</domain>
<domain name="shxzwxsns.video.qq.com" timeout="600">
<ip property="major">123.161.60.11</ip>
<ip property="major">123.161.60.12</ip>
<ip property="major">123.161.60.13</ip>
<ip property="major">123.161.60.14</ip>
<ip property="major">123.161.60.15</ip>
<ip property="major">123.161.60.17</ip>
<ip property="major">123.161.60.18</ip>
<ip property="major">123.161.60.19</ip>
<ip property="major">123.161.60.20</ip>
<ip property="major">123.161.60.21</ip>
<ip property="major">123.161.60.22</ip>
<ip property="major">123.161.60.23</ip>
<ip property="major">123.161.60.25</ip>
<ip property="major">123.161.60.26</ip>
<ip property="major">123.161.60.27</ip>
<ip property="major">123.161.60.28</ip>
<ip property="major">123.161.60.29</ip>
<ip property="major">123.161.60.30</ip>
<ip property="major">123.161.60.31</ip>
<ip property="major">123.161.60.32</ip>
<ip property="major">123.161.60.33</ip>
<ip property="major">123.161.60.34</ip>
<ip property="major">123.161.60.35</ip>
<ip property="major">123.161.60.71</ip>
<ip property="major">123.161.60.72</ip>
<ip property="major">123.161.60.73</ip>
<ip property="major">123.161.60.74</ip>
<ip property="major">123.161.60.75</ip>
<ip property="major">123.161.60.76</ip>
<ip property="major">123.161.60.77</ip>
<ip property="major">123.161.60.78</ip>
<ip property="major">123.161.60.79</ip>
</domain>
<domain name="shzjwxsns.video.qq.com" timeout="600">
<ip property="major">123.161.60.11</ip>
<ip property="major">123.161.60.12</ip>
<ip property="major">123.161.60.13</ip>
<ip property="major">123.161.60.14</ip>
<ip property="major">123.161.60.15</ip>
<ip property="major">123.161.60.17</ip>
<ip property="major">123.161.60.18</ip>
<ip property="major">123.161.60.19</ip>
<ip property="major">123.161.60.20</ip>
<ip property="major">123.161.60.21</ip>
<ip property="major">123.161.60.22</ip>
<ip property="major">123.161.60.23</ip>
<ip property="major">123.161.60.25</ip>
<ip property="major">123.161.60.26</ip>
<ip property="major">123.161.60.27</ip>
<ip property="major">123.161.60.28</ip>
<ip property="major">123.161.60.29</ip>
<ip property="major">123.161.60.30</ip>
<ip property="major">123.161.60.31</ip>
<ip property="major">123.161.60.32</ip>
<ip property="major">123.161.60.33</ip>
<ip property="major">123.161.60.34</ip>
<ip property="major">123.161.60.35</ip>
<ip property="major">123.161.60.71</ip>
<ip property="major">123.161.60.72</ip>
<ip property="major">123.161.60.73</ip>
<ip property="major">123.161.60.74</ip>
<ip property="major">123.161.60.75</ip>
<ip property="major">123.161.60.76</ip>
<ip property="major">123.161.60.77</ip>
<ip property="major">123.161.60.78</ip>
<ip property="major">123.161.60.79</ip>
</domain>
<domain name="szmmsns.qpic.cn" timeout="600">
<ip property="major">123.161.60.151</ip>
<ip property="major">123.161.60.152</ip>
<ip property="major">123.161.60.153</ip>
<ip property="major">123.161.60.154</ip>
<ip property="major">123.161.60.155</ip>
<ip property="major">123.161.60.156</ip>
<ip property="major">123.161.60.157</ip>
<ip property="major">123.161.60.158</ip>
<ip property="major">123.161.60.159</ip>
<ip property="major">123.161.60.160</ip>
<ip property="major">123.161.60.162</ip>
<ip property="major">123.161.60.163</ip>
<ip property="major">123.161.60.164</ip>
<ip property="major">123.161.60.165</ip>
<ip property="major">123.161.60.166</ip>
<ip property="major">123.161.60.168</ip>
<ip property="major">123.161.60.201</ip>
<ip property="major">123.161.60.202</ip>
<ip property="minor">113.96.232.190</ip>
<ip property="minor">113.96.232.213</ip>
<ip property="minor">113.96.232.214</ip>
<ip property="minor">14.18.245.196</ip>
<ip property="minor">14.18.245.201</ip>
<ip property="minor">14.18.245.245</ip>
<ip property="minor">183.3.226.57</ip>
<ip property="minor">183.3.226.82</ip>
<ip property="minor">183.3.226.83</ip>
<ip property="minor">183.3.226.84</ip>
<ip property="minor">183.3.226.85</ip>
<ip property="minor">183.3.234.147</ip>
<ip property="minor">183.3.235.104</ip>
<ip property="minor">183.3.235.119</ip>
<ip property="minor">183.3.235.147</ip>
<ip property="minor">183.3.235.163</ip>
<ip property="minor">183.61.49.200</ip>
<ip property="minor">59.37.96.126</ip>
<ip property="minor">59.37.96.142</ip>
<ip property="minor">59.37.96.144</ip>
<ip property="minor">59.37.96.15</ip>
<ip property="minor">59.37.96.155</ip>
<ip property="minor">59.37.96.34</ip>
</domain>
<domain name="szxzwxsns.video.qq.com" timeout="600">
<ip property="major">123.161.60.11</ip>
<ip property="major">123.161.60.12</ip>
<ip property="major">123.161.60.13</ip>
<ip property="major">123.161.60.14</ip>
<ip property="major">123.161.60.15</ip>
<ip property="major">123.161.60.17</ip>
<ip property="major">123.161.60.18</ip>
<ip property="major">123.161.60.19</ip>
<ip property="major">123.161.60.20</ip>
<ip property="major">123.161.60.21</ip>
<ip property="major">123.161.60.22</ip>
<ip property="major">123.161.60.23</ip>
<ip property="major">123.161.60.25</ip>
<ip property="major">123.161.60.26</ip>
<ip property="major">123.161.60.27</ip>
<ip property="major">123.161.60.28</ip>
<ip property="major">123.161.60.29</ip>
<ip property="major">123.161.60.30</ip>
<ip property="major">123.161.60.31</ip>
<ip property="major">123.161.60.32</ip>
<ip property="major">123.161.60.33</ip>
<ip property="major">123.161.60.34</ip>
<ip property="major">123.161.60.35</ip>
<ip property="major">123.161.60.71</ip>
<ip property="major">123.161.60.72</ip>
<ip property="major">123.161.60.73</ip>
<ip property="major">123.161.60.74</ip>
<ip property="major">123.161.60.75</ip>
<ip property="major">123.161.60.76</ip>
<ip property="major">123.161.60.77</ip>
<ip property="major">123.161.60.78</ip>
<ip property="major">123.161.60.79</ip>
</domain>
<domain name="szzjwxsns.video.qq.com" timeout="600">
<ip property="major">123.161.60.11</ip>
<ip property="major">123.161.60.12</ip>
<ip property="major">123.161.60.13</ip>
<ip property="major">123.161.60.14</ip>
<ip property="major">123.161.60.15</ip>
<ip property="major">123.161.60.17</ip>
<ip property="major">123.161.60.18</ip>
<ip property="major">123.161.60.19</ip>
<ip property="major">123.161.60.20</ip>
<ip property="major">123.161.60.21</ip>
<ip property="major">123.161.60.22</ip>
<ip property="major">123.161.60.23</ip>
<ip property="major">123.161.60.25</ip>
<ip property="major">123.161.60.26</ip>
<ip property="major">123.161.60.27</ip>
<ip property="major">123.161.60.28</ip>
<ip property="major">123.161.60.29</ip>
<ip property="major">123.161.60.30</ip>
<ip property="major">123.161.60.31</ip>
<ip property="major">123.161.60.32</ip>
<ip property="major">123.161.60.33</ip>
<ip property="major">123.161.60.34</ip>
<ip property="major">123.161.60.35</ip>
<ip property="major">123.161.60.71</ip>
<ip property="major">123.161.60.72</ip>
<ip property="major">123.161.60.73</ip>
<ip property="major">123.161.60.74</ip>
<ip property="major">123.161.60.75</ip>
<ip property="major">123.161.60.76</ip>
<ip property="major">123.161.60.77</ip>
<ip property="major">123.161.60.78</ip>
<ip property="major">123.161.60.79</ip>
<ip property="minor">183.3.235.14</ip>
<ip property="minor">183.3.235.34</ip>
<ip property="minor">183.3.235.35</ip>
<ip property="minor">183.3.235.37</ip>
<ip property="minor">183.3.235.38</ip>
<ip property="minor">183.3.235.55</ip>
<ip property="minor">183.3.235.56</ip>
<ip property="minor">183.3.235.58</ip>
<ip property="minor">183.3.235.59</ip>
<ip property="minor">183.3.235.60</ip>
<ip property="minor">183.3.235.61</ip>
<ip property="minor">183.3.235.121</ip>
<ip property="minor">183.3.233.145</ip>
<ip property="minor">183.3.233.147</ip>
<ip property="minor">183.3.233.149</ip>
<ip property="minor">183.3.233.155</ip>
<ip property="minor">183.3.233.157</ip>
<ip property="minor">183.3.235.167</ip>
<ip property="minor">183.3.234.170</ip>
<ip property="minor">183.3.234.172</ip>
<ip property="minor">183.3.234.174</ip>
<ip property="minor">183.3.234.176</ip>
<ip property="minor">183.3.234.183</ip>
<ip property="minor">183.3.234.205</ip>
<ip property="minor">183.3.234.248</ip>
<ip property="minor">183.3.234.253</ip>
<ip property="minor">183.3.234.254</ip>
<ip property="minor">183.3.235.57</ip>
</domain>
<domain name="vweixinf.tc.qq.com" timeout="600">
<ip property="major">123.161.60.11</ip>
<ip property="major">123.161.60.12</ip>
<ip property="major">123.161.60.13</ip>
<ip property="major">123.161.60.14</ip>
<ip property="major">123.161.60.15</ip>
<ip property="major">123.161.60.17</ip>
<ip property="major">123.161.60.18</ip>
<ip property="major">123.161.60.19</ip>
<ip property="major">123.161.60.20</ip>
<ip property="major">123.161.60.21</ip>
<ip property="major">123.161.60.22</ip>
<ip property="major">123.161.60.23</ip>
<ip property="major">123.161.60.25</ip>
<ip property="major">123.161.60.26</ip>
<ip property="major">123.161.60.27</ip>
<ip property="major">123.161.60.28</ip>
<ip property="major">123.161.60.29</ip>
<ip property="major">123.161.60.30</ip>
<ip property="major">123.161.60.31</ip>
<ip property="major">123.161.60.32</ip>
<ip property="major">123.161.60.33</ip>
<ip property="major">123.161.60.34</ip>
<ip property="major">123.161.60.35</ip>
<ip property="major">123.161.60.71</ip>
<ip property="major">123.161.60.72</ip>
<ip property="major">123.161.60.73</ip>
<ip property="major">123.161.60.74</ip>
<ip property="major">123.161.60.75</ip>
<ip property="major">123.161.60.76</ip>
<ip property="major">123.161.60.77</ip>
<ip property="major">123.161.60.78</ip>
<ip property="major">123.161.60.79</ip>
</domain>
<domain name="weixinc2c.tc.qq.com" timeout="600">
<ip property="major">1.199.93.252</ip>
</domain>
<domain name="wx.qlogo.cn" timeout="600">
<ip property="major">180.163.25.31</ip>
<ip property="major">101.226.233.167</ip>
<ip property="major">61.151.168.149</ip>
<ip property="major">180.163.21.101</ip>
<ip property="major">101.227.160.54</ip>
<ip property="major">180.163.26.112</ip>
<ip property="major">61.151.186.31</ip>
<ip property="major">101.226.90.164</ip>
<ip property="major">180.97.8.36</ip>
<ip property="major">180.163.21.155</ip>
<ip property="major">180.97.8.101</ip>
<ip property="major">180.97.8.25</ip>
<ip property="major">180.163.26.115</ip>
<ip property="major">180.163.26.111</ip>
</domain>
<domain name="wximg.qq.com" timeout="600">
<ip property="major">1.199.93.190</ip>
</domain>
<domain name="wxsnsdy.video.qq.com" timeout="600">
<ip property="major">123.161.60.11</ip>
<ip property="major">123.161.60.12</ip>
<ip property="major">123.161.60.13</ip>
<ip property="major">123.161.60.14</ip>
<ip property="major">123.161.60.15</ip>
<ip property="major">123.161.60.17</ip>
<ip property="major">123.161.60.18</ip>
<ip property="major">123.161.60.19</ip>
<ip property="major">123.161.60.20</ip>
<ip property="major">123.161.60.21</ip>
<ip property="major">123.161.60.22</ip>
<ip property="major">123.161.60.23</ip>
<ip property="major">123.161.60.25</ip>
<ip property="major">123.161.60.26</ip>
<ip property="major">123.161.60.27</ip>
<ip property="major">123.161.60.28</ip>
<ip property="major">123.161.60.29</ip>
<ip property="major">123.161.60.30</ip>
<ip property="major">123.161.60.31</ip>
<ip property="major">123.161.60.32</ip>
<ip property="major">123.161.60.33</ip>
<ip property="major">123.161.60.34</ip>
<ip property="major">123.161.60.35</ip>
<ip property="major">123.161.60.71</ip>
<ip property="major">123.161.60.72</ip>
<ip property="major">123.161.60.73</ip>
<ip property="major">123.161.60.74</ip>
<ip property="major">123.161.60.75</ip>
<ip property="major">123.161.60.76</ip>
<ip property="major">123.161.60.77</ip>
<ip property="major">123.161.60.78</ip>
<ip property="major">123.161.60.79</ip>
</domain>
<domain name="wxsnsdy.wxs.qq.com" timeout="600">
<ip property="major">123.161.60.11</ip>
<ip property="major">123.161.60.12</ip>
<ip property="major">123.161.60.13</ip>
<ip property="major">123.161.60.14</ip>
<ip property="major">123.161.60.15</ip>
<ip property="major">123.161.60.17</ip>
<ip property="major">123.161.60.18</ip>
<ip property="major">123.161.60.19</ip>
<ip property="major">123.161.60.20</ip>
<ip property="major">123.161.60.21</ip>
<ip property="major">123.161.60.22</ip>
<ip property="major">123.161.60.23</ip>
<ip property="major">123.161.60.25</ip>
<ip property="major">123.161.60.26</ip>
<ip property="major">123.161.60.27</ip>
<ip property="major">123.161.60.28</ip>
<ip property="major">123.161.60.29</ip>
<ip property="major">123.161.60.30</ip>
<ip property="major">123.161.60.31</ip>
<ip property="major">123.161.60.32</ip>
<ip property="major">123.161.60.33</ip>
<ip property="major">123.161.60.34</ip>
<ip property="major">123.161.60.35</ip>
<ip property="major">123.161.60.71</ip>
<ip property="major">123.161.60.72</ip>
<ip property="major">123.161.60.73</ip>
<ip property="major">123.161.60.74</ip>
<ip property="major">123.161.60.75</ip>
<ip property="major">123.161.60.76</ip>
<ip property="major">123.161.60.77</ip>
<ip property="major">123.161.60.78</ip>
<ip property="major">123.161.60.79</ip>
</domain>
<domain name="wxsnsdyvip.wxs.qq.com" timeout="600">
<ip property="major">1.199.93.252</ip>
</domain>
</domainlist>
<builtiniplist>
<ip>123.151.10.172</ip>
<ip>101.226.211.106</ip>
</builtiniplist>
<clientip>171.15.158.212</clientip>
<clientispid>0</clientispid>
<timestamp>1547654400</timestamp>
<nextipv6>0</nextipv6>
<signature2>MEUCIBmPHuWH9xPCUUaRI8u57/aVnY1tR/RhksIG963tiwUxAiEA5AK9+N7X5Wp9St3PBIVXrSS6AmClhe+0mMWku2QmRCI=</signature2>
</dns>

<functionlist>
<change>false</change>
</functionlist>
');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T10:59:57.837+08:00",
//     "time": 170,
//     "request": {
//         "method": "GET",
//         "url": "http://dns.weixin.qq.com/cgi-bin/micromsg-bin/newgetdns?uin=26763965&clientversion=385876519&scene=0&net=1&md5=c96b81ed62ff5023ec9f18e7e69edeb5&devicetype=iOS12.1.2&lan=zh_CN&sigver=2",
//         "httpVersion": "HTTP/1.0",
//         "cookies": [],
//         "headers": [
//             {
//                 "name": "Accept",
//                 "value": "*/*"
//             },
//             {
//                 "name": "Accept-Encoding",
//                 "value": "deflate"
//             },
//             {
//                 "name": "Cache-Control",
//                 "value": "no-cache"
//             },
//             {
//                 "name": "Content-Type",
//                 "value": "application/octet-stream"
//             },
//             {
//                 "name": "Host",
//                 "value": "dns.weixin.qq.com"
//             },
//             {
//                 "name": "User-Agent",
//                 "value": "MicroMessenger Client"
//             },
//             {
//                 "name": "Connection",
//                 "value": "close"
//             }
//         ],
//         "queryString": [
//             {
//                 "name": "uin",
//                 "value": "26763965"
//             },
//             {
//                 "name": "clientversion",
//                 "value": "385876519"
//             },
//             {
//                 "name": "scene",
//                 "value": "0"
//             },
//             {
//                 "name": "net",
//                 "value": "1"
//             },
//             {
//                 "name": "md5",
//                 "value": "c96b81ed62ff5023ec9f18e7e69edeb5"
//             },
//             {
//                 "name": "devicetype",
//                 "value": "iOS12.1.2"
//             },
//             {
//                 "name": "lan",
//                 "value": "zh_CN"
//             },
//             {
//                 "name": "sigver",
//                 "value": "2"
//             }
//         ],
//         "headersSize": 359,
//         "bodySize": 0
//     },
//     "response": {
//         "_charlesStatus": "EXCEPTION",
//         "status": 200,
//         "statusText": "OK",
//         "httpVersion": "HTTP/1.0",
//         "cookies": [],
//         "headers": [
//             {
//                 "name": "Cache-Control",
//                 "value": "no-cache"
//             },
//             {
//                 "name": "Content-Type",
//                 "value": "text/xml"
//             },
//             {
//                 "name": "Connection",
//                 "value": "close"
//             }
//         ],
//         "content": {
//             "size": 1802,
//             "mimeType": "text/xml",
//             "text": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<dns>\n<retcode>0</retcode>\n<domainlist>\n<domain name=\"extshort.weixin.qq.com\" timeout=\"600\">\n<ip>101.89.15.101</ip>\n<ip>101.89.15.100</ip>\n<ip>101.226.49.144</ip>\n<ip>101.226.49.141</ip>\n<ip>101.226.211.44</ip>\n<ip>101.226.211.101</ip>\n</domain>\n<domain name=\"localhost\" timeout=\"600\">\n<ip>127.0.0.1</ip>\n</domain>\n<domain name=\"long.weixin.qq.com\" timeout=\"600\">\n<ip>101.89.15.106</ip>\n<ip>101.89.15.105</ip>\n<ip>101.226.49.147</ip>\n<ip>101.226.49.140</ip>\n<ip>101.226.211.46</ip>\n<ip>101.226.211.105</ip>\n</domain>\n<domain name=\"minorshort.weixin.qq.com\" timeout=\"600\">\n<ip>61.151.224.41</ip>\n<ip>61.151.183.16</ip>\n<ip>101.227.169.159</ip>\n</domain>\n<domain name=\"mlextshort.weixin.qq.com\" timeout=\"600\">\n<ip>220.171.124.105</ip>\n<ip>220.171.124.102</ip>\n</domain>\n<domain name=\"mllong.weixin.qq.com\" timeout=\"600\">\n<ip>220.171.124.107</ip>\n<ip>220.171.124.104</ip>\n</domain>\n<domain name=\"mlminorshort.weixin.qq.com\" timeout=\"600\">\n<ip>220.171.124.113</ip>\n</domain>\n<domain name=\"mlshort.pay.weixin.qq.com\" timeout=\"600\">\n<ip>220.171.124.11</ip>\n</domain>\n<domain name=\"mlshort.weixin.qq.com\" timeout=\"600\">\n<ip>220.171.124.105</ip>\n<ip>220.171.124.102</ip>\n</domain>\n<domain name=\"newyear.weixin.qq.com\" timeout=\"600\">\n<ip>180.153.160.11</ip>\n</domain>\n<domain name=\"sh2tjextshort.weixin.qq.com\" timeout=\"600\">\n<ip>101.89.15.101</ip>\n<ip>101.89.15.100</ip>\n<ip>101.226.49.144</ip>\n<ip>101.226.49.141</ip>\n<ip>101.226.211.44</ip>\n<ip>101.226.211.101</ip>\n</domain>\n<domain name=\"sh2tjlong.weixin.qq.com\" timeout=\"600\">\n<ip>123.151.10.186</ip>\n</domain>\n<domain name=\"sh2tjminorshort.weixin.qq.com\" timeout=\"600\">\n<ip>61.151.224.41</ip>\n<ip>61.151.183.16</ip>\n<ip>101.227.169.159</ip>\n</domain>\n<domain name=\"sh2tjshort.weixin.qq.com\" timeout=\"600\">\n<ip>123.151.10.185</ip>\n</domain>\n<domain name=\"shextshort.weixin.qq.com\" timeout=\"600\">\n<ip>101.89.15.101</ip>\n<ip>101.89.15.100</ip>\n<ip>101.226.49.144</ip>\n<ip>101.226.49.141</ip>\n<ip>101.226.211.44</ip>\n<ip>101.226.211.101</ip>\n</domain>\n<domain name=\"short.pay.weixin.qq.com\" timeout=\"600\">\n<ip>180.163.25.142</ip>\n<ip>101.226.211.100</ip>\n</domain>\n<domain name=\"short.weixin.qq.com\" timeout=\"600\">\n<ip>101.89.15.101</ip>\n<ip>101.89.15.100</ip>\n<ip>101.226.49.144</ip>\n<ip>101.226.49.141</ip>\n<ip>101.226.211.44</ip>\n<ip>101.226.211.101</ip>\n</domain>\n<domain name=\"shshort.pay.weixin.qq.com\" timeout=\"600\">\n<ip>180.163.25.142</ip>\n<ip>101.226.211.100</ip>\n</domain>\n<domain name=\"sz2tjextshort.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.105</ip>\n<ip>183.3.234.100</ip>\n<ip>183.3.224.144</ip>\n<ip>183.3.224.141</ip>\n<ip>113.96.209.100</ip>\n<ip>113.96.202.100</ip>\n</domain>\n<domain name=\"sz2tjlong.weixin.qq.com\" timeout=\"600\">\n<ip>123.151.10.186</ip>\n</domain>\n<domain name=\"sz2tjminorshort.weixin.qq.com\" timeout=\"600\">\n<ip>183.61.46.199</ip>\n<ip>14.18.245.167</ip>\n<ip>14.17.42.45</ip>\n</domain>\n<domain name=\"sz2tjshort.weixin.qq.com\" timeout=\"600\">\n<ip>123.151.10.185</ip>\n</domain>\n<domain name=\"szextshort.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.105</ip>\n<ip>183.3.234.100</ip>\n<ip>183.3.224.141</ip>\n<ip>113.96.209.101</ip>\n<ip>113.96.202.101</ip>\n<ip>113.96.202.100</ip>\n</domain>\n<domain name=\"szlong.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.224.146</ip>\n<ip>183.3.224.139</ip>\n<ip>14.215.158.119</ip>\n<ip>14.215.158.102</ip>\n<ip>113.96.202.106</ip>\n<ip>113.96.202.105</ip>\n</domain>\n<domain name=\"szminorshort.weixin.qq.com\" timeout=\"600\">\n<ip>183.61.46.199</ip>\n<ip>14.18.245.167</ip>\n<ip>14.17.42.45</ip>\n</domain>\n<domain name=\"szshort.pay.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.104</ip>\n<ip>183.3.224.143</ip>\n</domain>\n<domain name=\"szshort.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.100</ip>\n<ip>183.3.224.144</ip>\n<ip>183.3.224.141</ip>\n<ip>14.215.158.100</ip>\n<ip>113.96.209.101</ip>\n<ip>113.96.209.100</ip>\n</domain>\n<domain name=\"tjextshort.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.105</ip>\n<ip>183.3.234.100</ip>\n<ip>183.3.224.144</ip>\n<ip>14.215.158.101</ip>\n<ip>113.96.209.101</ip>\n<ip>113.96.202.100</ip>\n</domain>\n<domain name=\"tjlong.weixin.qq.com\" timeout=\"600\">\n<ip>123.151.10.186</ip>\n</domain>\n<domain name=\"tjshort.weixin.qq.com\" timeout=\"600\">\n<ip>123.151.10.185</ip>\n</domain>\n<domain name=\"caextshort.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.11</ip>\n<ip>113.96.209.108</ip>\n</domain>\n<domain name=\"calong.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.109</ip>\n<ip>14.17.41.157</ip>\n</domain>\n<domain name=\"caminorshort.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.11</ip>\n<ip>113.96.209.108</ip>\n</domain>\n<domain name=\"cashort.pay.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.111</ip>\n</domain>\n<domain name=\"cashort.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.11</ip>\n<ip>113.96.209.108</ip>\n</domain>\n<domain name=\"hkextshort.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.11</ip>\n<ip>113.96.209.108</ip>\n</domain>\n<domain name=\"hklong.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.109</ip>\n<ip>14.17.41.157</ip>\n</domain>\n<domain name=\"hkminorshort.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.11</ip>\n<ip>113.96.209.108</ip>\n</domain>\n<domain name=\"hkshort.pay.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.111</ip>\n</domain>\n<domain name=\"hkshort.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.11</ip>\n<ip>113.96.209.108</ip>\n</domain>\n<domain name=\"hkshort6.weixin.qq.com\" timeout=\"600\">\n<ip>183.3.234.11</ip>\n<ip>113.96.209.108</ip>\n</domain>\n<domain name=\"emoji.qpic.cn\" timeout=\"600\">\n<ip property=\"major\">1.199.93.252</ip>\n</domain>\n<domain name=\"mmsns.qpic.cn\" timeout=\"600\">\n<ip property=\"major\">123.161.60.151</ip>\n<ip property=\"major\">123.161.60.152</ip>\n<ip property=\"major\">123.161.60.153</ip>\n<ip property=\"major\">123.161.60.154</ip>\n<ip property=\"major\">123.161.60.155</ip>\n<ip property=\"major\">123.161.60.156</ip>\n<ip property=\"major\">123.161.60.157</ip>\n<ip property=\"major\">123.161.60.158</ip>\n<ip property=\"major\">123.161.60.159</ip>\n<ip property=\"major\">123.161.60.160</ip>\n<ip property=\"major\">123.161.60.162</ip>\n<ip property=\"major\">123.161.60.163</ip>\n<ip property=\"major\">123.161.60.164</ip>\n<ip property=\"major\">123.161.60.165</ip>\n<ip property=\"major\">123.161.60.166</ip>\n<ip property=\"major\">123.161.60.168</ip>\n<ip property=\"major\">123.161.60.201</ip>\n<ip property=\"major\">123.161.60.202</ip>\n</domain>\n<domain name=\"resstatic.servicewechat.com\" timeout=\"600\">\n<ip property=\"major\">1.199.93.219</ip>\n<ip property=\"major\">1.198.5.213</ip>\n<ip property=\"major\">1.198.5.85</ip>\n</domain>\n<domain name=\"shmmsns.qpic.cn\" timeout=\"600\">\n<ip property=\"major\">123.161.60.151</ip>\n<ip property=\"major\">123.161.60.152</ip>\n<ip property=\"major\">123.161.60.153</ip>\n<ip property=\"major\">123.161.60.154</ip>\n<ip property=\"major\">123.161.60.155</ip>\n<ip property=\"major\">123.161.60.156</ip>\n<ip property=\"major\">123.161.60.157</ip>\n<ip property=\"major\">123.161.60.158</ip>\n<ip property=\"major\">123.161.60.159</ip>\n<ip property=\"major\">123.161.60.160</ip>\n<ip property=\"major\">123.161.60.162</ip>\n<ip property=\"major\">123.161.60.163</ip>\n<ip property=\"major\">123.161.60.164</ip>\n<ip property=\"major\">123.161.60.165</ip>\n<ip property=\"major\">123.161.60.166</ip>\n<ip property=\"major\">123.161.60.168</ip>\n<ip property=\"major\">123.161.60.201</ip>\n<ip property=\"major\">123.161.60.202</ip>\n<ip property=\"minor\">101.91.69.149</ip>\n<ip property=\"minor\">101.91.69.151</ip>\n<ip property=\"minor\">101.91.69.152</ip>\n<ip property=\"minor\">180.97.10.105</ip>\n<ip property=\"minor\">180.97.10.106</ip>\n<ip property=\"minor\">180.97.10.23</ip>\n<ip property=\"minor\">180.97.10.24</ip>\n<ip property=\"minor\">180.97.10.27</ip>\n<ip property=\"minor\">180.97.10.28</ip>\n<ip property=\"minor\">180.97.10.34</ip>\n<ip property=\"minor\">180.97.10.35</ip>\n<ip property=\"minor\">180.97.10.36</ip>\n<ip property=\"minor\">180.97.10.38</ip>\n<ip property=\"minor\">180.97.10.39</ip>\n<ip property=\"minor\">180.97.10.41</ip>\n<ip property=\"minor\">180.97.10.42</ip>\n<ip property=\"minor\">180.97.10.43</ip>\n<ip property=\"minor\">180.97.8.112</ip>\n<ip property=\"minor\">180.97.8.12</ip>\n<ip property=\"minor\">180.97.8.16</ip>\n<ip property=\"minor\">180.97.8.26</ip>\n<ip property=\"minor\">180.97.8.27</ip>\n<ip property=\"minor\">180.97.8.29</ip>\n<ip property=\"minor\">180.97.8.31</ip>\n<ip property=\"minor\">180.97.8.37</ip>\n<ip property=\"minor\">180.97.8.45</ip>\n</domain>\n<domain name=\"shp.qlogo.cn\" timeout=\"600\">\n<ip property=\"major\">61.151.168.227</ip>\n<ip property=\"major\">61.151.183.44</ip>\n<ip property=\"major\">180.97.9.11</ip>\n<ip property=\"major\">180.97.9.100</ip>\n<ip property=\"major\">101.226.212.107</ip>\n<ip property=\"major\">101.226.76.160</ip>\n<ip property=\"major\">101.226.90.145</ip>\n<ip property=\"major\">61.151.168.141</ip>\n<ip property=\"major\">101.91.63.156</ip>\n<ip property=\"major\">101.91.63.157</ip>\n<ip property=\"major\">61.151.206.58</ip>\n<ip property=\"major\">101.91.63.158</ip>\n<ip property=\"major\">180.97.117.116</ip>\n<ip property=\"major\">180.97.117.108</ip>\n<ip property=\"major\">180.97.117.100</ip>\n<ip property=\"major\">180.97.9.124</ip>\n<ip property=\"major\">180.97.9.123</ip>\n<ip property=\"major\">180.97.9.125</ip>\n<ip property=\"major\">180.97.117.101</ip>\n<ip property=\"major\">180.97.9.122</ip>\n<ip property=\"major\">180.97.8.103</ip>\n<ip property=\"major\">180.97.117.50</ip>\n</domain>\n<domain name=\"shxzwxsns.video.qq.com\" timeout=\"600\">\n<ip property=\"major\">123.161.60.11</ip>\n<ip property=\"major\">123.161.60.12</ip>\n<ip property=\"major\">123.161.60.13</ip>\n<ip property=\"major\">123.161.60.14</ip>\n<ip property=\"major\">123.161.60.15</ip>\n<ip property=\"major\">123.161.60.17</ip>\n<ip property=\"major\">123.161.60.18</ip>\n<ip property=\"major\">123.161.60.19</ip>\n<ip property=\"major\">123.161.60.20</ip>\n<ip property=\"major\">123.161.60.21</ip>\n<ip property=\"major\">123.161.60.22</ip>\n<ip property=\"major\">123.161.60.23</ip>\n<ip property=\"major\">123.161.60.25</ip>\n<ip property=\"major\">123.161.60.26</ip>\n<ip property=\"major\">123.161.60.27</ip>\n<ip property=\"major\">123.161.60.28</ip>\n<ip property=\"major\">123.161.60.29</ip>\n<ip property=\"major\">123.161.60.30</ip>\n<ip property=\"major\">123.161.60.31</ip>\n<ip property=\"major\">123.161.60.32</ip>\n<ip property=\"major\">123.161.60.33</ip>\n<ip property=\"major\">123.161.60.34</ip>\n<ip property=\"major\">123.161.60.35</ip>\n<ip property=\"major\">123.161.60.71</ip>\n<ip property=\"major\">123.161.60.72</ip>\n<ip property=\"major\">123.161.60.73</ip>\n<ip property=\"major\">123.161.60.74</ip>\n<ip property=\"major\">123.161.60.75</ip>\n<ip property=\"major\">123.161.60.76</ip>\n<ip property=\"major\">123.161.60.77</ip>\n<ip property=\"major\">123.161.60.78</ip>\n<ip property=\"major\">123.161.60.79</ip>\n</domain>\n<domain name=\"shzjwxsns.video.qq.com\" timeout=\"600\">\n<ip property=\"major\">123.161.60.11</ip>\n<ip property=\"major\">123.161.60.12</ip>\n<ip property=\"major\">123.161.60.13</ip>\n<ip property=\"major\">123.161.60.14</ip>\n<ip property=\"major\">123.161.60.15</ip>\n<ip property=\"major\">123.161.60.17</ip>\n<ip property=\"major\">123.161.60.18</ip>\n<ip property=\"major\">123.161.60.19</ip>\n<ip property=\"major\">123.161.60.20</ip>\n<ip property=\"major\">123.161.60.21</ip>\n<ip property=\"major\">123.161.60.22</ip>\n<ip property=\"major\">123.161.60.23</ip>\n<ip property=\"major\">123.161.60.25</ip>\n<ip property=\"major\">123.161.60.26</ip>\n<ip property=\"major\">123.161.60.27</ip>\n<ip property=\"major\">123.161.60.28</ip>\n<ip property=\"major\">123.161.60.29</ip>\n<ip property=\"major\">123.161.60.30</ip>\n<ip property=\"major\">123.161.60.31</ip>\n<ip property=\"major\">123.161.60.32</ip>\n<ip property=\"major\">123.161.60.33</ip>\n<ip property=\"major\">123.161.60.34</ip>\n<ip property=\"major\">123.161.60.35</ip>\n<ip property=\"major\">123.161.60.71</ip>\n<ip property=\"major\">123.161.60.72</ip>\n<ip property=\"major\">123.161.60.73</ip>\n<ip property=\"major\">123.161.60.74</ip>\n<ip property=\"major\">123.161.60.75</ip>\n<ip property=\"major\">123.161.60.76</ip>\n<ip property=\"major\">123.161.60.77</ip>\n<ip property=\"major\">123.161.60.78</ip>\n<ip property=\"major\">123.161.60.79</ip>\n</domain>\n<domain name=\"szmmsns.qpic.cn\" timeout=\"600\">\n<ip property=\"major\">123.161.60.151</ip>\n<ip property=\"major\">123.161.60.152</ip>\n<ip property=\"major\">123.161.60.153</ip>\n<ip property=\"major\">123.161.60.154</ip>\n<ip property=\"major\">123.161.60.155</ip>\n<ip property=\"major\">123.161.60.156</ip>\n<ip property=\"major\">123.161.60.157</ip>\n<ip property=\"major\">123.161.60.158</ip>\n<ip property=\"major\">123.161.60.159</ip>\n<ip property=\"major\">123.161.60.160</ip>\n<ip property=\"major\">123.161.60.162</ip>\n<ip property=\"major\">123.161.60.163</ip>\n<ip property=\"major\">123.161.60.164</ip>\n<ip property=\"major\">123.161.60.165</ip>\n<ip property=\"major\">123.161.60.166</ip>\n<ip property=\"major\">123.161.60.168</ip>\n<ip property=\"major\">123.161.60.201</ip>\n<ip property=\"major\">123.161.60.202</ip>\n<ip property=\"minor\">113.96.232.190</ip>\n<ip property=\"minor\">113.96.232.213</ip>\n<ip property=\"minor\">113.96.232.214</ip>\n<ip property=\"minor\">14.18.245.196</ip>\n<ip property=\"minor\">14.18.245.201</ip>\n<ip property=\"minor\">14.18.245.245</ip>\n<ip property=\"minor\">183.3.226.57</ip>\n<ip property=\"minor\">183.3.226.82</ip>\n<ip property=\"minor\">183.3.226.83</ip>\n<ip property=\"minor\">183.3.226.84</ip>\n<ip property=\"minor\">183.3.226.85</ip>\n<ip property=\"minor\">183.3.234.147</ip>\n<ip property=\"minor\">183.3.235.104</ip>\n<ip property=\"minor\">183.3.235.119</ip>\n<ip property=\"minor\">183.3.235.147</ip>\n<ip property=\"minor\">183.3.235.163</ip>\n<ip property=\"minor\">183.61.49.200</ip>\n<ip property=\"minor\">59.37.96.126</ip>\n<ip property=\"minor\">59.37.96.142</ip>\n<ip property=\"minor\">59.37.96.144</ip>\n<ip property=\"minor\">59.37.96.15</ip>\n<ip property=\"minor\">59.37.96.155</ip>\n<ip property=\"minor\">59.37.96.34</ip>\n</domain>\n<domain name=\"szxzwxsns.video.qq.com\" timeout=\"600\">\n<ip property=\"major\">123.161.60.11</ip>\n<ip property=\"major\">123.161.60.12</ip>\n<ip property=\"major\">123.161.60.13</ip>\n<ip property=\"major\">123.161.60.14</ip>\n<ip property=\"major\">123.161.60.15</ip>\n<ip property=\"major\">123.161.60.17</ip>\n<ip property=\"major\">123.161.60.18</ip>\n<ip property=\"major\">123.161.60.19</ip>\n<ip property=\"major\">123.161.60.20</ip>\n<ip property=\"major\">123.161.60.21</ip>\n<ip property=\"major\">123.161.60.22</ip>\n<ip property=\"major\">123.161.60.23</ip>\n<ip property=\"major\">123.161.60.25</ip>\n<ip property=\"major\">123.161.60.26</ip>\n<ip property=\"major\">123.161.60.27</ip>\n<ip property=\"major\">123.161.60.28</ip>\n<ip property=\"major\">123.161.60.29</ip>\n<ip property=\"major\">123.161.60.30</ip>\n<ip property=\"major\">123.161.60.31</ip>\n<ip property=\"major\">123.161.60.32</ip>\n<ip property=\"major\">123.161.60.33</ip>\n<ip property=\"major\">123.161.60.34</ip>\n<ip property=\"major\">123.161.60.35</ip>\n<ip property=\"major\">123.161.60.71</ip>\n<ip property=\"major\">123.161.60.72</ip>\n<ip property=\"major\">123.161.60.73</ip>\n<ip property=\"major\">123.161.60.74</ip>\n<ip property=\"major\">123.161.60.75</ip>\n<ip property=\"major\">123.161.60.76</ip>\n<ip property=\"major\">123.161.60.77</ip>\n<ip property=\"major\">123.161.60.78</ip>\n<ip property=\"major\">123.161.60.79</ip>\n</domain>\n<domain name=\"szzjwxsns.video.qq.com\" timeout=\"600\">\n<ip property=\"major\">123.161.60.11</ip>\n<ip property=\"major\">123.161.60.12</ip>\n<ip property=\"major\">123.161.60.13</ip>\n<ip property=\"major\">123.161.60.14</ip>\n<ip property=\"major\">123.161.60.15</ip>\n<ip property=\"major\">123.161.60.17</ip>\n<ip property=\"major\">123.161.60.18</ip>\n<ip property=\"major\">123.161.60.19</ip>\n<ip property=\"major\">123.161.60.20</ip>\n<ip property=\"major\">123.161.60.21</ip>\n<ip property=\"major\">123.161.60.22</ip>\n<ip property=\"major\">123.161.60.23</ip>\n<ip property=\"major\">123.161.60.25</ip>\n<ip property=\"major\">123.161.60.26</ip>\n<ip property=\"major\">123.161.60.27</ip>\n<ip property=\"major\">123.161.60.28</ip>\n<ip property=\"major\">123.161.60.29</ip>\n<ip property=\"major\">123.161.60.30</ip>\n<ip property=\"major\">123.161.60.31</ip>\n<ip property=\"major\">123.161.60.32</ip>\n<ip property=\"major\">123.161.60.33</ip>\n<ip property=\"major\">123.161.60.34</ip>\n<ip property=\"major\">123.161.60.35</ip>\n<ip property=\"major\">123.161.60.71</ip>\n<ip property=\"major\">123.161.60.72</ip>\n<ip property=\"major\">123.161.60.73</ip>\n<ip property=\"major\">123.161.60.74</ip>\n<ip property=\"major\">123.161.60.75</ip>\n<ip property=\"major\">123.161.60.76</ip>\n<ip property=\"major\">123.161.60.77</ip>\n<ip property=\"major\">123.161.60.78</ip>\n<ip property=\"major\">123.161.60.79</ip>\n<ip property=\"minor\">183.3.235.14</ip>\n<ip property=\"minor\">183.3.235.34</ip>\n<ip property=\"minor\">183.3.235.35</ip>\n<ip property=\"minor\">183.3.235.37</ip>\n<ip property=\"minor\">183.3.235.38</ip>\n<ip property=\"minor\">183.3.235.55</ip>\n<ip property=\"minor\">183.3.235.56</ip>\n<ip property=\"minor\">183.3.235.58</ip>\n<ip property=\"minor\">183.3.235.59</ip>\n<ip property=\"minor\">183.3.235.60</ip>\n<ip property=\"minor\">183.3.235.61</ip>\n<ip property=\"minor\">183.3.235.121</ip>\n<ip property=\"minor\">183.3.233.145</ip>\n<ip property=\"minor\">183.3.233.147</ip>\n<ip property=\"minor\">183.3.233.149</ip>\n<ip property=\"minor\">183.3.233.155</ip>\n<ip property=\"minor\">183.3.233.157</ip>\n<ip property=\"minor\">183.3.235.167</ip>\n<ip property=\"minor\">183.3.234.170</ip>\n<ip property=\"minor\">183.3.234.172</ip>\n<ip property=\"minor\">183.3.234.174</ip>\n<ip property=\"minor\">183.3.234.176</ip>\n<ip property=\"minor\">183.3.234.183</ip>\n<ip property=\"minor\">183.3.234.205</ip>\n<ip property=\"minor\">183.3.234.248</ip>\n<ip property=\"minor\">183.3.234.253</ip>\n<ip property=\"minor\">183.3.234.254</ip>\n<ip property=\"minor\">183.3.235.57</ip>\n</domain>\n<domain name=\"vweixinf.tc.qq.com\" timeout=\"600\">\n<ip property=\"major\">123.161.60.11</ip>\n<ip property=\"major\">123.161.60.12</ip>\n<ip property=\"major\">123.161.60.13</ip>\n<ip property=\"major\">123.161.60.14</ip>\n<ip property=\"major\">123.161.60.15</ip>\n<ip property=\"major\">123.161.60.17</ip>\n<ip property=\"major\">123.161.60.18</ip>\n<ip property=\"major\">123.161.60.19</ip>\n<ip property=\"major\">123.161.60.20</ip>\n<ip property=\"major\">123.161.60.21</ip>\n<ip property=\"major\">123.161.60.22</ip>\n<ip property=\"major\">123.161.60.23</ip>\n<ip property=\"major\">123.161.60.25</ip>\n<ip property=\"major\">123.161.60.26</ip>\n<ip property=\"major\">123.161.60.27</ip>\n<ip property=\"major\">123.161.60.28</ip>\n<ip property=\"major\">123.161.60.29</ip>\n<ip property=\"major\">123.161.60.30</ip>\n<ip property=\"major\">123.161.60.31</ip>\n<ip property=\"major\">123.161.60.32</ip>\n<ip property=\"major\">123.161.60.33</ip>\n<ip property=\"major\">123.161.60.34</ip>\n<ip property=\"major\">123.161.60.35</ip>\n<ip property=\"major\">123.161.60.71</ip>\n<ip property=\"major\">123.161.60.72</ip>\n<ip property=\"major\">123.161.60.73</ip>\n<ip property=\"major\">123.161.60.74</ip>\n<ip property=\"major\">123.161.60.75</ip>\n<ip property=\"major\">123.161.60.76</ip>\n<ip property=\"major\">123.161.60.77</ip>\n<ip property=\"major\">123.161.60.78</ip>\n<ip property=\"major\">123.161.60.79</ip>\n</domain>\n<domain name=\"weixinc2c.tc.qq.com\" timeout=\"600\">\n<ip property=\"major\">1.199.93.252</ip>\n</domain>\n<domain name=\"wx.qlogo.cn\" timeout=\"600\">\n<ip property=\"major\">180.163.25.31</ip>\n<ip property=\"major\">101.226.233.167</ip>\n<ip property=\"major\">61.151.168.149</ip>\n<ip property=\"major\">180.163.21.101</ip>\n<ip property=\"major\">101.227.160.54</ip>\n<ip property=\"major\">180.163.26.112</ip>\n<ip property=\"major\">61.151.186.31</ip>\n<ip property=\"major\">101.226.90.164</ip>\n<ip property=\"major\">180.97.8.36</ip>\n<ip property=\"major\">180.163.21.155</ip>\n<ip property=\"major\">180.97.8.101</ip>\n<ip property=\"major\">180.97.8.25</ip>\n<ip property=\"major\">180.163.26.115</ip>\n<ip property=\"major\">180.163.26.111</ip>\n</domain>\n<domain name=\"wximg.qq.com\" timeout=\"600\">\n<ip property=\"major\">1.199.93.190</ip>\n</domain>\n<domain name=\"wxsnsdy.video.qq.com\" timeout=\"600\">\n<ip property=\"major\">123.161.60.11</ip>\n<ip property=\"major\">123.161.60.12</ip>\n<ip property=\"major\">123.161.60.13</ip>\n<ip property=\"major\">123.161.60.14</ip>\n<ip property=\"major\">123.161.60.15</ip>\n<ip property=\"major\">123.161.60.17</ip>\n<ip property=\"major\">123.161.60.18</ip>\n<ip property=\"major\">123.161.60.19</ip>\n<ip property=\"major\">123.161.60.20</ip>\n<ip property=\"major\">123.161.60.21</ip>\n<ip property=\"major\">123.161.60.22</ip>\n<ip property=\"major\">123.161.60.23</ip>\n<ip property=\"major\">123.161.60.25</ip>\n<ip property=\"major\">123.161.60.26</ip>\n<ip property=\"major\">123.161.60.27</ip>\n<ip property=\"major\">123.161.60.28</ip>\n<ip property=\"major\">123.161.60.29</ip>\n<ip property=\"major\">123.161.60.30</ip>\n<ip property=\"major\">123.161.60.31</ip>\n<ip property=\"major\">123.161.60.32</ip>\n<ip property=\"major\">123.161.60.33</ip>\n<ip property=\"major\">123.161.60.34</ip>\n<ip property=\"major\">123.161.60.35</ip>\n<ip property=\"major\">123.161.60.71</ip>\n<ip property=\"major\">123.161.60.72</ip>\n<ip property=\"major\">123.161.60.73</ip>\n<ip property=\"major\">123.161.60.74</ip>\n<ip property=\"major\">123.161.60.75</ip>\n<ip property=\"major\">123.161.60.76</ip>\n<ip property=\"major\">123.161.60.77</ip>\n<ip property=\"major\">123.161.60.78</ip>\n<ip property=\"major\">123.161.60.79</ip>\n</domain>\n<domain name=\"wxsnsdy.wxs.qq.com\" timeout=\"600\">\n<ip property=\"major\">123.161.60.11</ip>\n<ip property=\"major\">123.161.60.12</ip>\n<ip property=\"major\">123.161.60.13</ip>\n<ip property=\"major\">123.161.60.14</ip>\n<ip property=\"major\">123.161.60.15</ip>\n<ip property=\"major\">123.161.60.17</ip>\n<ip property=\"major\">123.161.60.18</ip>\n<ip property=\"major\">123.161.60.19</ip>\n<ip property=\"major\">123.161.60.20</ip>\n<ip property=\"major\">123.161.60.21</ip>\n<ip property=\"major\">123.161.60.22</ip>\n<ip property=\"major\">123.161.60.23</ip>\n<ip property=\"major\">123.161.60.25</ip>\n<ip property=\"major\">123.161.60.26</ip>\n<ip property=\"major\">123.161.60.27</ip>\n<ip property=\"major\">123.161.60.28</ip>\n<ip property=\"major\">123.161.60.29</ip>\n<ip property=\"major\">123.161.60.30</ip>\n<ip property=\"major\">123.161.60.31</ip>\n<ip property=\"major\">123.161.60.32</ip>\n<ip property=\"major\">123.161.60.33</ip>\n<ip property=\"major\">123.161.60.34</ip>\n<ip property=\"major\">123.161.60.35</ip>\n<ip property=\"major\">123.161.60.71</ip>\n<ip property=\"major\">123.161.60.72</ip>\n<ip property=\"major\">123.161.60.73</ip>\n<ip property=\"major\">123.161.60.74</ip>\n<ip property=\"major\">123.161.60.75</ip>\n<ip property=\"major\">123.161.60.76</ip>\n<ip property=\"major\">123.161.60.77</ip>\n<ip property=\"major\">123.161.60.78</ip>\n<ip property=\"major\">123.161.60.79</ip>\n</domain>\n<domain name=\"wxsnsdyvip.wxs.qq.com\" timeout=\"600\">\n<ip property=\"major\">1.199.93.252</ip>\n</domain>\n</domainlist>\n<builtiniplist>\n<ip>123.151.10.172</ip>\n<ip>101.226.211.106</ip>\n</builtiniplist>\n<clientip>171.15.158.212</clientip>\n<clientispid>0</clientispid>\n<timestamp>1547654400</timestamp>\n<nextipv6>0</nextipv6>\n<signature2>MEUCIBmPHuWH9xPCUUaRI8u57/aVnY1tR/RhksIG963tiwUxAiEA5AK9+N7X5Wp9St3PBIVXrSS6AmClhe+0mMWku2QmRCI=</signature2>\n</dns>\n\n<functionlist>\n<change>false</change>\n</functionlist>\n"
//         },
//         "redirectURL": null,
//         "headersSize": 239,
//         "bodySize": 1802,
//         "comment": "EOF: Unexpected end of ZLIB input stream"
//     },
//     "serverIPAddress": "101.226.211.106",
//     "cache": {},
//     "timings": {
//         "dns": 25,
//         "connect": 45,
//         "ssl": -1,
//         "send": 0,
//         "wait": 94,
//         "receive": 6
//     }
// }
