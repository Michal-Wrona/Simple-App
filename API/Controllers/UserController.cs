using API.DTOs;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        public UserController(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<GetUserDto>>> GetUsers()
        {
            var users = await _userRepository.GetUsers();

            var getUsersDto = _mapper.Map<IEnumerable<GetUserDto>>(users);

            return Ok(getUsersDto);
        }

        [HttpGet("id")]
        public async Task<ActionResult<GetUserDto>> GetUser(string id)
        {
            var user = await _userRepository.GetUser(id);

            var getUserDto = _mapper.Map<GetUserDto>(user);

            return Ok(getUserDto);
        }

       // [Authorize]
        [HttpGet("username")]
        public async Task<ActionResult<GetUserDto>> GetUsername(string name)
        {
            var user = await _userRepository.GetUsername(name);

            var getUserDto = _mapper.Map<GetUserDto>(user);

            return Ok(getUserDto);
        }

        // [Authorize]
        [HttpPut]
        public async Task<ActionResult> EditUser(UserEditDto userEditDto)
        {
            var user = await _userRepository.GetUsername(userEditDto.Name);

            var userEdit = _mapper.Map(userEditDto, user);

            _userRepository.EditUser(userEdit);

            if (await _userRepository.SaveAllAsync()) return NoContent();

            return BadRequest("Failed to update user");
        }
    }
}