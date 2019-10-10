﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TinRoll.Logic.Managers.Interfaces;
using TinRoll.Shared.Dtos;

namespace TinRoll.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagsController : ControllerBase
    {
        private readonly ITagManager _tagManager;

        public TagsController(ITagManager tagManager)
        {
            _tagManager = tagManager;
        }

        [HttpGet]
        public async Task<IEnumerable<TagDto>> GetTags()
        {
            var tags = await _tagManager.GetTagsAsync();
            return tags;
        }

        [HttpGet("{id}")]
        public async Task<TagDto> GetTag(int id)
        {
            var tag = await _tagManager.GetTagAsync(id);
            return tag;
        }

        [HttpPost]
        public async Task<TagDto> CreateTag(TagDto tag)
        {
            var newTag = await _tagManager.CreateTagAsync(tag);
            return newTag;
        }

        [HttpGet("search/{searchText}")]
        public async Task<IEnumerable<TagDto>> GetTags(string searchText)
        {
            var tags = await _tagManager.GetTagsAsync(searchText);
            return tags;
        }

        [HttpGet("question/{questionId}")]
        public async Task<IEnumerable<TagDto>> GetTags(int questionId)
        {
            var tags = await _tagManager.GetTagsAsync(questionId);
            return tags;
        }
    }
}