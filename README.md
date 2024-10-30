# yt-frontend-transcript

Small web frontend for Daniel Miessler's `yt`

The tool is used to pull transcripts from a youtube video.

This frontend can be used by non-technical users to execute the tool and retrieve the transcripts. Can be useful to paste them into other LLM's interfaces (ChatGPT, big-agi, LibreChat...).

## Tech stack

-> Node:18 container for the server
-> HTML + JS + CSS for the frontend

```bash
npm install
npm run
```

-> Yt binary compiled for x86_64 Linux. You can build your own at [https://github.com/danielmiessler/yt](https://github.com/danielmiessler/yt)

```bash
go build yt.go
```

-> You'll need a YouTube API Key. The tool expects to read it from fabric's `.env`file in `~/.config/fabric/.env` : 
- [https://github.com/danielmiessler/fabric](https://github.com/danielmiessler/fabric)

## Security 

LLM-Generated code. Dangerous function in `server.js` executing the YT binary : 

```javascript
// Sanitize inputs to prevent command injection
    const sanitizedUrl = url.replace(/[;&|`$()]/g, '');
    const sanitizedLang = lang.replace(/[^a-zA-Z]/g, '');
```

Might be RCE as a service. Internal use only

## Docker 

Dockerfile provided for convenience. Don't forget the setup of the .env key. 
If you want to recompile the binary : 
-> Install golang from go's official website
-> build


